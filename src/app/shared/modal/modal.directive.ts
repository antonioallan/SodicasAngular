import { Directive, Input, HostListener} from '@angular/core';
import { ModalService } from './modal.service'
@Directive({
  selector: '[modal]'
})
export class ModalDirective {

  @Input('modal') modal: string;
  @Input('acao') acao: string;
  constructor(private _service: ModalService) { }

  @HostListener('click') onClick(){
    if(this.acao == 'show'){
      this._service.show(this.modal);
    }
    if(this.acao == 'hide'){
      this._service.hide(this.modal);
    }
  }
}
