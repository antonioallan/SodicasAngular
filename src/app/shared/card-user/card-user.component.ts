import { Component, OnInit, Input } from '@angular/core';
import { Autor } from '../../domain/autor/autor.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() autor: Autor;
  
  constructor() { }

  ngOnInit() {
  }

}
