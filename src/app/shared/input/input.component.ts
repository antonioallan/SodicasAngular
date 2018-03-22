import { Component, OnInit, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ContentChild(NgModel) control: NgModel;
  constructor() { }

  ngOnInit() {
  }

  hasError() {
    return this.control.invalid && this.control.touched;
  }

  getErros(): string[] {
    let erros: string[] = []
    if (this.control.invalid) {
      Object.keys(this.control.errors).forEach(key => {
        switch (key) {
          case 'required':
            erros.push("Campo obrigatório.");
            break;
          case 'maxLength':
            erros.push('Campo superior ao tamanho maximo permitido.');
            break;
          case 'minLength':
            erros.push('Campo inferior ao tamanho mínimo permitido.');
            break;
          case 'email':
            erros.push('E-mail inválido.');
            break;
          default:
            erros.push('Campo inválido.')
            break;
        }
      })
    }
    return erros;
  }

}
