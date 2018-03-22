import { USER_LODADO_KEY } from './usuario.constants';
export class UsuarioStore{
    static getUsuario() {
        return JSON.parse(localStorage.getItem(USER_LODADO_KEY))
      }
    
      static setUsuario(usuario) {
        localStorage.setItem(USER_LODADO_KEY, JSON.stringify(usuario));
      }
    
      static removeUsuario() {
        localStorage.removeItem(USER_LODADO_KEY)
      }
}