import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() name : string;
  visible: boolean = false;
  constructor(private _modalService: ModalService) { }

  ngOnInit() {
    this._modalService.event.subscribe(event => {
      if(event.acao == 'show' && event.name == this.name){
        this.visible = true;
      }
      if(event.acao == 'hide'&& event.name == this.name){
        this.hideModal();
      }
    })
  }

  hideModal(){
    this.visible = false;
  }

}
