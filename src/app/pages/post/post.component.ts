import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DicaService } from '../../domain/dica/dica.service';
import { ComentarioService } from '../../domain/comentario/comentario.service';
import { Dica } from '../../domain/dica/dica.model';
import { Comentario } from '../../domain/comentario/comentario.model';
import { AutorStore } from '../../domain/autor/autor.store';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  dica: Dica = new Dica();
  comentarios: Comentario[] = [];
  constructor(
    private _router: ActivatedRoute,
    private _dicaService: DicaService,
    private _comentarioService: ComentarioService,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    let snapshot: ActivatedRouteSnapshot  = this._router.snapshot;
    let id = snapshot.params['id'];
    this._dicaService.carregar(id).subscribe(dica => {
      this.dica = new Dica(dica);
      this._comentarioService.buscar(this.dica.id).subscribe(coms => {
        coms.forEach(com => this.comentarios.push(new Comentario(com)));
      });
    });
  }

  addComentario($event) {
    let comentario = new Comentario($event);
    comentario.dica = this.dica
    this._comentarioService.cadastrar(comentario).subscribe(comentario => {
      this.comentarios.unshift(new Comentario(comentario));
    });
  }

  computandoVoto($event) {
    let autor = AutorStore.getAutor();
    if (autor && (autor.id == this.dica.autor.id)) {
      this._messageService.show({ message: 'Não Permitido votar em suas próprias dicas!', tipo: 'danger' });
      return
    }
    this._dicaService.votar({ dica: this.dica, nota: $event }).subscribe(dica => {
      this.dica = new Dica(dica);
      this._messageService.show({ message: 'obrigado por participar', tipo: 'success' });
    }, err => this._messageService.show({ message: 'Erro em seu voto, tente novamente!', tipo: 'danger' })
    )
  }

}
