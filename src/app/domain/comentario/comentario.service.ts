import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import { Comentario } from './comentario.model';
@Injectable()
export class ComentarioService {

  private _path: string = `${environment.api}/comentario`;
  constructor(private _http: HttpClient) { }

  cadastrar(comentario): Observable<Comentario> {
      return this._http.post<Comentario>(`${this._path}/${comentario.dica.id}`, comentario)
  }

  buscar(dicaId): Observable<Comentario[]>{
    return this._http.get<Comentario[]>(`${this._path}/${dicaId}`);
  }

}
