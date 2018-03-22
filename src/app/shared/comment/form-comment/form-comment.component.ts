import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comentario } from '../../../domain/comentario/comentario.model';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {

  @Output() salvar : EventEmitter<Comentario> = new EventEmitter();
  comment: Comentario = new Comentario();
  constructor() { }

  ngOnInit() {
  }

  comentar(){
    this.salvar.emit(new Comentario(this.comment));
    this.comment = new Comentario();
  }

}
