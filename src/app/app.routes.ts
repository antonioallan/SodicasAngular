import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { AreaComponent } from './pages/area/area.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PostComponent } from './pages/post/post.component';

export const ROUTES: Routes = [
    { path : "", component : HomeComponent },
    { path : "login", component : LoginComponent },
    { path : "area", component : AreaComponent },
    { path: "acesso", component : AcessoComponent },
    { path : "perfil", component : PerfilComponent },
    { path : "signup", component : SignupComponent },
    { path : "dica/:id", component : PostComponent }    
] 