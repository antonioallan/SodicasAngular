import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {

  event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  show(name: string) {   
    this.event.emit({ acao: 'show', name: name });
  }

  hide(name: string) {
    this.event.emit({ acao: 'hide', name: name });
  }
}
