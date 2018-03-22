import { Autor } from '../autor/autor.model'
import { Dica } from '../dica/dica.model'
export class Comentario {
    id: number;
    autor: string = '';
    conteudo: string = '';
    data: Date;
    dica: Dica = new Dica();

    constructor(jComentario?) {
        if (jComentario) {
            this.id = jComentario.id
            this.autor = jComentario.autor
            this.conteudo = jComentario.conteudo;
            this.data = jComentario.data ? new Date(jComentario.data) : new Date();
            this.dica = new Dica(jComentario.dica);
        }
    }

    get dataFormatada() {
        return this.data.toLocaleDateString();
    }
}