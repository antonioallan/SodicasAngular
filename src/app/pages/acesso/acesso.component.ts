import { Component, OnInit } from '@angular/core';
import { AutorStore } from '../../domain/autor/autor.store';
import { Autor } from '../../domain/autor/autor.model';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  autor: Autor = AutorStore.getAutor();
  constructor() { }

  ngOnInit() {
  }

}
