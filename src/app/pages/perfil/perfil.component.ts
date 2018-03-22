import { Component, OnInit} from '@angular/core';
import { Usuario } from '../../domain/usuario/usuario.model';
import { Autor } from '../../domain/autor/autor.model';
import { UsuarioStore } from '../../domain/usuario/usuario.store';
import { AutorStore } from '../../domain/autor/autor.store';
import { UsuarioService } from '../../domain/usuario/usuario.service';
import { AutorService } from '../../domain/autor/autor.service';
import { Router } from '@angular/router';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = UsuarioStore.getUsuario();
  autor: Autor = new Autor('', '', UsuarioStore.getUsuario().username, 0, '');
  isshow: boolean = false;
  opcoes: string[] = [
    'https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Avatar_robot_head.png',
    'http://www.clker.com/cliparts/H/e/F/a/2/K/blue-robot-md.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png/202px-Robot-clip-art-book-covers-feJCV3-clipart.png',
    'https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png',
    'https://marketplace.canva.com/MAB6vzmEQlA/1/thumbnail/canva-robot-electric-avatar-icon-MAB6vzmEQlA.png'
  ];
  constructor(
    private _usuarioService: UsuarioService, 
    private _autorService: AutorService,
    private _notificador: MessageService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    if (AutorStore.getAutor()) {
      this.autor = AutorStore.getAutor();
    }
  }

  toggle() {
    this.isshow = !this.isshow
  }
  mudar(url) {
    this.autor.avatar = url
    this.isshow = false
  }

  salvar(){
    this.usuario.autor = this.autor;
    this._usuarioService.cadastrar(this.usuario).subscribe(user => {
      UsuarioStore.setUsuario(user);
      AutorStore.setAutor(user.autor);
      this._autorService.setAutor();
      this._router.navigate(['/area']);
    }, err => this._notificador.show({ message: err.message, tipo: 'danger' }));

  }


}
