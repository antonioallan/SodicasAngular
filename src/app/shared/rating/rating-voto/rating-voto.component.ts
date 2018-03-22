import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-voto',
  templateUrl: './rating-voto.component.html',
  styleUrls: ['./rating-voto.component.css']
})
export class RatingVotoComponent implements OnInit {

  rites: number[] = [1,2,3,4,5];
  rite:number = 0;
  @Output() votado: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  selecionar(rite: number){
    this.rite = rite;
  }

  votar(){
    this.votado.emit(this.rite);
    this.rite = 0;
  }
}
