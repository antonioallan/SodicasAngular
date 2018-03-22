import { Component, OnInit } from '@angular/core';
import { SecurityStore } from '../../domain/securanca/security.store';
import { SecurityService } from '../../domain/securanca/security.service';
import { AutorService } from '../../domain/autor/autor.service'; 
import { AutorStore } from '../../domain/autor/autor.store';
import { Autor } from '../../domain/autor/autor.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogado: boolean = SecurityStore.isLogado();
  autor: Autor = AutorStore.getAutor();
  constructor(private _securityService: SecurityService, private _autorService: AutorService, private router:Router) { }

  ngOnInit() {
    this._securityService.event.subscribe(evn => {
      this.isLogado = SecurityStore.isLogado();
    });
    this._autorService.event.subscribe(env => this.autor = AutorStore.getAutor());

  }

  logout(){
    this._securityService.logout();
    this.router.navigate(["/"]);
  }

}
