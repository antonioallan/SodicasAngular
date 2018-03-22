export class Autor{
    id: number;
    avatar: string;
    nome: string;
    nickname: string;
    pontuacao: number;
    sobre: string;
    
    constructor(avatar,nome,nickname,pontuacao,sobre){
        this.avatar = avatar
        this.nome = nome
        this.nickname = nickname
        this.pontuacao = pontuacao
        this.sobre = sobre
    }
}