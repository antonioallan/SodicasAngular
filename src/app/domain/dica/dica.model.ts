import { Autor } from "../autor/autor.model";

export class Dica {

    id: number;
    data: string;
    titulo: string = '';
    autor: Autor;
    conteudo: string = '';
    tags: any[] = [];
    pontuacao: number;
    comentarios: any[] = [];

    constructor(jDica?) {
        if (jDica) {
            this.id = jDica.id
            this.data = jDica.data
            this.titulo = jDica.titulo
            this.autor = jDica.autor
            this.conteudo = jDica.conteudo
            this.tags = jDica.tags
            this.pontuacao = jDica.pontuacao
            this.comentarios = jDica.comentarios;
        }
    }




    get dataFormatada() {
        return new Date(this.data).toLocaleDateString();
    }
}