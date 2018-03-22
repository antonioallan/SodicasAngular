import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tag } from './tag.model';
import { Observable } from 'rxjs/Observable';
import { SecurityService } from '../securanca/security.service';
@Injectable()
export class TagService {

  private _path = `${environment.api}/tag`;
  constructor(private _http: HttpClient) { }

  cadastrar(tag: Tag): Observable<Tag> {
    return this._http.post<Tag>(this._path, tag, { headers: SecurityService.getHeaderSecurity() });
  }

  buscar(): Observable<Tag[]> {
    return this._http.get<Tag[]>(this._path);
  }

}
