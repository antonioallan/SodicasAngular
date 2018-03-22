import { Component, OnInit, ViewChild } from '@angular/core';
import { TagService } from '../../domain/tag/tag.service';
import { DicaService } from '../../domain/dica/dica.service';
import { AutorStore } from '../../domain/autor/autor.store';
import { Autor } from '../../domain/autor/autor.model';
import { Dica } from '../../domain/dica/dica.model';
import { Tag } from '../../domain/tag/tag.model';
import { SecurityService } from '../../domain/securanca/security.service';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  autor: Autor = new Autor('','','',0,'');
  dicas: Dica[] = [];
  tags: Tag[] = [];
  tag: Tag = new Tag();
  dica: Dica = new Dica();
  @ViewChild('formDica') formDica: NgForm;
  @ViewChild('formTag') formTag: NgForm;

  constructor(
    private _tagService: TagService,
    private _dicaService: DicaService,
    private _securityService: SecurityService,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    this.autor = AutorStore.getAutor();
    this._dicaService.buscarPor(this.autor).subscribe(dicas => this.dicas = dicas);
    this._tagService.buscar().subscribe(tags => this.tags = tags);
  }

  addTag() {
    this._tagService.cadastrar(this.tag).subscribe(
      tag => {
        this.tags.push(tag);
        this.tag = new Tag();
      },
      err => {
        if (err.status == 401) {
          this._securityService.logout();
        }
      }
    );
  }

  addDica() {
    if (this.formDica.valid) {
      if (this.dica.id) {
        this._dicaService.alterar(this.dica).subscribe(msg =>
          this._messageService.show({ message: msg.msg, tipo: "success" }),
          err => {
            if (err.status == 401) {
              this._securityService.logout();
            }
          }
        );
      } else {
        this.dica.autor = this.autor;
        this._dicaService.cadastrar(this.dica).subscribe(
          dica => this.dicas.push(dica),
          err => {
            if (err.status == 401) {
              this._securityService.logout();
            }
          }
        );
      }
      this.limparForm();
    } else {
      Object.keys(this.formDica.controls).forEach(campo => this.formDica.controls[campo].markAsTouched({ onlySelf: true }));
    }
  }

  limparForm() {
    this.dica = new Dica();
  }

  seleciona(dica) {
    this.dica = dica;
  }

  remove() {
    this._dicaService.remove(this.dica).subscribe(
      m => {
        let i = this.dicas.indexOf(this.dica);
        this.dicas.splice(i, 1);
        this._messageService.show({ message: m.msg, tipo: "success" });
      },
      err => {
        if (err.status == 401) {
          this._securityService.logout();
        }
        console.log(err);
        // err
        //   .json()
        //   .then(msg =>
        //     message.$emit("show", { message: msg.msg, tipo: "danger" })
        //   );
      }
    );
    this.limparForm();
  }

  hasError(campo: string): boolean {
    return this.formDica.controls[campo] && this.formDica.controls[campo].invalid && this.formDica.controls[campo].touched;
  }

  compareId(obj, obj2){
    return obj.id == obj2.id;
  }

}
