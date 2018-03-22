import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { SecurityService } from './domain/securanca/security.service';
import { UsuarioService } from './domain/usuario/usuario.service';
import { DicaService } from './domain/dica/dica.service';
import { TagService } from './domain/tag/tag.service';
import { AutorService } from './domain/autor/autor.service';
import { MessageService } from './shared/message/message.service';
import { ComentarioService } from './domain/comentario/comentario.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { CardDicaComponent } from './shared/card-dica/card-dica.component';
import { RatingComponent } from './shared/rating/rating.component';
import { MessageComponent } from './shared/message/message.component';
import { AreaComponent } from './pages/area/area.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormSignupComponent } from './signup/form-signup/form-signup.component';
import { InputComponent } from './shared/input/input.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CardUserComponent } from './shared/card-user/card-user.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalDirective } from './shared/modal/modal.directive';
import { ModalService } from './shared/modal/modal.service';
import { PostComponent } from './pages/post/post.component';
import { RatingVotoComponent } from './shared/rating/rating-voto/rating-voto.component';
import { CardCommentComponent } from './shared/comment/card-comment/card-comment.component';
import { FormCommentComponent } from './shared/comment/form-comment/form-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DropdownComponent,
    CardDicaComponent,
    RatingComponent,
    MessageComponent,
    AreaComponent,
    AcessoComponent,
    SignupComponent,
    FormSignupComponent,
    InputComponent,
    PerfilComponent,
    CardUserComponent,
    ModalComponent,
    ModalDirective,
    PostComponent,
    RatingVotoComponent,
    CardCommentComponent,
    FormCommentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [SecurityService, UsuarioService, DicaService, TagService, AutorService, MessageService, ModalService, ComentarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
