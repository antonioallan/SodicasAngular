export class Dados {

    titulo: string;
    tags: any[]; 

    constructor(titulo,tags = []){
        this.titulo = titulo;
        this.tags = tags;
    }

    addTag(tag: any){
        this.tags.push(tag);
    }

    removeTag(tag: any){
        let i = this.tags.indexOf(tag)
        this.tags.splice(i,1);
    }
}