import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  visible: boolean = false;
  tempo: number = 0;
  classeCss: string = 'alert-info';
  classeProgress: string = 'bg-info';
  msg: string = '';
  constructor(private _service: MessageService) { }

  ngOnInit() {
    this._service.event.subscribe(notf => {
      if (notf.acao = 'show') {
        this.visible = true;
        this.msg = notf.message.message
        this.classeCss = 'alert-'.concat(notf.message.tipo)
        this.classeProgress = 'bg-'.concat(notf.message.tipo)
        this.iniciarContador()
      } else {
        this.visible = false;
      }
    })
  }

  iniciarContador() {
    let intervalo = setInterval(() => {
      if (this.tempo < 100) {
        this.tempo++
      }
    }, 35);
    setTimeout(() => {
      this.visible = false
      this.tempo = 0
      clearInterval(intervalo)
    }, 4000);
  }
  close() {
    this.visible = false
  }

}
