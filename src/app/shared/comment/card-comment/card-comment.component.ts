import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../../domain/comentario/comentario.model';
@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html'
})
export class CardCommentComponent implements OnInit {

  @Input() comment: Comentario;
  
  constructor() { }

  ngOnInit() {
  }

}
