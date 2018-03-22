import { AUTOR_KEY } from './autor.constants';

export class AutorStore {

  constructor() { }

  static getAutor() {
    return JSON.parse(localStorage.getItem(AUTOR_KEY))
  }

  static setAutor(autor) {
    return localStorage.setItem(AUTOR_KEY, JSON.stringify(autor))
  }

  static removeAutor() {
    localStorage.removeItem(AUTOR_KEY)
  }

}
