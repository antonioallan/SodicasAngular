import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() label: string;
  @Input() opcoes: any[] = [];
  @Output() itemClicado = new EventEmitter();
  @Input() ativo: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.ativo = !this.ativo;
  }

  clicado(item){
    this.itemClicado.emit(item);
  }

}
