import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {

  event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  show(message){
    this.event.emit({acao :'show', message});
  }

  hide(){
    this.event.emit({acao : 'hide'});
  }

}
