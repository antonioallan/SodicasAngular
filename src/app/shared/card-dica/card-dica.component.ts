import { Component, OnInit, Input } from '@angular/core';
import { Dica } from '../../domain/dica/dica.model';

@Component({
  selector: 'app-card-dica',
  templateUrl: './card-dica.component.html',
  styleUrls: ['./card-dica.component.css']
})
export class CardDicaComponent implements OnInit {

  @Input() dica: Dica = new Dica();
  constructor() { }

  ngOnInit() {
  }

  get resumo(){
      return this.dica.conteudo.substring(0,120).concat("...");
  }

}
