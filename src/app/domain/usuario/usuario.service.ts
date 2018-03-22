import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UsuarioStore } from './usuario.store'
import { Observable } from 'rxjs/Observable';
import { Usuario } from './usuario.model';
import { SecurityService } from '../securanca/security.service';
@Injectable()
export class UsuarioService {

  private _path: string = `${environment.api}/usuario`;

  constructor(private _http: HttpClient) { }

  cadastrar(usuario: any): Observable<any> {
    if (usuario.username) {
      return this._http.put<any>(this._path, usuario)
    }
    return this._http.post<any>(this._path, usuario)
  }

  buscaUsuario(username) {
    return this._http.get<Usuario>(`${this._path}/${username}`,
      { headers: SecurityService.getHeaderSecurity() }
    ).subscribe(usuario => {
      UsuarioStore.setUsuario(usuario)
    });
  }

}
