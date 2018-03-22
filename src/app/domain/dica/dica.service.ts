import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecurityService } from '../securanca/security.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Dica } from './dica.model';
@Injectable()
export class DicaService {

  private _path: string = `${environment.api}/dica`;
  constructor(private _http: HttpClient) { }

  lancamento(offset): Observable<Dica[]> {
    let limit = 3
    return this._http.get<Dica[]>(`${this._path}/lancamento?limit=${limit}&offset=${offset}`)
  }

  filtrar(dados, offset): Observable<Dica[]>{
    let limit = 3
    return this._http.post<Dica[]>(`${this._path}/filtro/${limit}/${offset}`, dados)
  }

  carregar(id):Observable<Dica>{
    return this._http.get<Dica>(`${this._path}/${id}`)
  }

  buscarPor(autor): Observable<Dica[]>{
    return this._http.get<Dica[]>(`${this._path}/autor/${autor.id}`)
  }
  cadastrar(dica): Observable<any> {
    console.log(dica);
    dica.comentarios = [];
    return this._http.post<any>(this._path, dica, { headers: SecurityService.getHeaderSecurity() })
  }

  alterar(dica): Observable<any> {
    return this._http.put<any>(this._path, dica, { headers: SecurityService.getHeaderSecurity() })
  }

  remove(dica): Observable<any> {
    return this._http.delete<any>(`${this._path}/${dica.id}`, { headers: SecurityService.getHeaderSecurity() })
  }


  votar(voto) {
    return this._http.post(`${this._path}/votar`, voto)
  }

}
