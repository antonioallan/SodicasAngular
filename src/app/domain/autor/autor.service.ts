import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AutorService {
  
  event: EventEmitter<string> = new EventEmitter();
  constructor() { }

  setAutor(){
    this.event.emit('autorSetado');
  }

  removeAutor(){
    this.event.emit('autorRemovido');
  }

}
