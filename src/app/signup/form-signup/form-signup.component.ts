import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Usuario } from '../../domain/usuario/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../domain/usuario/usuario.service';
import { Router } from '@angular/router';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})
export class FormSignupComponent implements OnInit {

  @Input() alterar: boolean = false;
  usuario: Usuario = new Usuario("", "");
  valid: boolean = false;
  @ViewChild(NgForm) form: NgForm;
  constructor(
    private _service:UsuarioService, 
    private _router: Router,
    private _notificador: MessageService
  ) { }

  ngOnInit() {
  }

  checarSenha(form) {
    this.valid = form.value.senha == form.value.confsenha;
  }

  hasError(campo: string): boolean {
    if (this.form.controls[campo]) {
      return this.form.controls[campo].touched && this.form.controls[campo].invalid
    }
  }

  salvar() {
    if (this.valid && this.form.valid) {
      this._service.cadastrar({ username: this.form.value.username, email: this.form.value.email, senha : this.form.value.senha})
      .subscribe(dado => {
        this._notificador.show({ message: "Operação realizada com sucesso", tipo: "success" })
        this._router.navigate(['/login']);
      }, err => this._notificador.show({ message: err.msg, tipo: "danger" }));
    }else{
      Object.keys(this.form.controls).forEach(campo => {
        this.form.controls[campo].markAsTouched({ onlySelf: true });
      })
    }

  }

}
