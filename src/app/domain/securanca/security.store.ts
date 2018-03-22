import { KEY_LOCALSTOREGE_USER } from './security.constants';
import { UsuarioStore } from '../usuario/usuario.store';
import { AutorStore } from '../autor/autor.store';

export class SecurityStore{
    
    static isLogado():boolean {
        return localStorage.getItem(KEY_LOCALSTOREGE_USER) ? true : false;
    }
    
    static usuarioLogado(): any {
        return JSON.parse(localStorage.getItem(KEY_LOCALSTOREGE_USER));
    }
    
    static logout() {
        localStorage.removeItem(KEY_LOCALSTOREGE_USER)
        UsuarioStore.removeUsuario()
        AutorStore.removeAutor()
    }

    static remover(){
        localStorage.removeItem(KEY_LOCALSTOREGE_USER);
    }

    static setUsuarioLogado(user){
        localStorage.setItem(KEY_LOCALSTOREGE_USER, JSON.stringify(user));
    }

}