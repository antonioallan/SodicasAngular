import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  @Input() pontuacao: number; 
  inteiro: number = 0;
  fracao:boolean = false;
  stars: number[] = [];

  constructor() { }

  ngOnInit() {
    this.inteiro = Math.trunc(this.pontuacao);
    this.fracao = Math.trunc((this.pontuacao - this.inteiro) * 100) > 0;
    for (let i = 0; i < this.inteiro; i++) {
      this.stars.push(i);
    }
  }

}
