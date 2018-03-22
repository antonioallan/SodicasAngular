import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credencias } from '../../domain/securanca/credenciais.model';
import { SecurityService } from '../../domain/securanca/security.service';
import { MessageService } from '../../shared/message/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credencias: Credencias = new Credencias();
  constructor(
    private _securityService: SecurityService, 
    private _messageService: MessageService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logando(){
    this._securityService.login(this.credencias).subscribe(user => {
      let autor = user.usuario.autor;
      if(autor){
        this._router.navigate(['/area']);
      }else{
        this._router.navigate(['/perfil']);
      }
    }, err => {
      if(err.status == 401){
        this._messageService.show({ message : 'Usuário ou Senha Inválida', tipo : 'danger' });
      }else{
        this._messageService.show({ message : 'Erro no servidor. tente novamente mais tarde.', tipo : 'danger' });
      }
    });
  }

}
