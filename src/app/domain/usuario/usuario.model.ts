import { Autor } from '../autor/autor.model';
export class Usuario{
    username: string;
    email: string;
    autor: Autor;

     constructor(username,email, autor = null){
        this.username = username
        this.email = email
        this.autor = autor;
    }
}