import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Usuario } from '../usuario/usuario.model';
import { UsuarioStore } from '../usuario/usuario.store';
import { AutorStore } from '../autor/autor.store';
import { AutorService } from '../autor/autor.service';
import { SecurityStore } from './security.store';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'
import { Router } from '@angular/router';
@Injectable()
export class SecurityService {

  event: EventEmitter<string> = new EventEmitter();
  private _path: string = `${environment.api}/security`;
  constructor(private _http: HttpClient,private _autorService: AutorService, private _router: Router) { }

  login(credencias):Observable<any> {
    return Observable.create((observer: Observer<any>) => {
        this._http.post<any>(`${this._path}/login`, credencias)
        .subscribe(user => {
            SecurityStore.remover();
            AutorStore.setAutor(user.usuario.autor)
            this._autorService.setAutor();
            SecurityStore.setUsuarioLogado({ username: user.username, token: user.token });
            UsuarioStore.setUsuario(new Usuario(user.usuario.username, user.usuario.email, user.usuario.autor))
            this.event.emit('login');
            observer.next(user)
        },err => observer.error(err));
    });
}

static isLogado() {
    return SecurityService.isLogado();
}

isValido() {
    let user = SecurityStore.usuarioLogado();
    return this._http.get<any>(`${this._path}/logado`, {
        headers: {
            HEADER_AUTH: user.token
        }
    }).subscribe(dado => true, err => false);
}

logout(){
    SecurityStore.logout();
    this.event.emit('logout');
    this._autorService.removeAutor();
    this._router.navigate(['/']);
}

  static getHeaderSecurity(): HttpHeaders {
    let user = SecurityStore.usuarioLogado();
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Restrito', "true");
    headers.append('Authentication', user.token);
    return headers;
  }

}
