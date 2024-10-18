import { Injectable } from '@angular/core';
import { BehaviorSubject,lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserApi } from '../modelos/userapi.module';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: string = '';
  clave: string = '';
  mensajeError: string = '';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<UserApi | null>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  constructor(private http: HttpClient) {}

  async apiData(usuario: string, clave: string): Promise<void> {
    const url = 'https://6711db204eca2acdb5f5f551.mockapi.io/usuarios';


    const res = await this.request<UserApi[]>('GET', url);

    const user = res.find(u => u.usuario === usuario && u.clave === clave);
    if (user) {

      this.isAuthenticatedSubject.next(true);
      this.usuarioCompletoSubject.next(user);
      this.loginFailedSubject.next(false);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  }
  iniciarse(credentials: any) {
    return this.http.post('https://6711db204eca2acdb5f5f551.mockapi.io/usuarios', credentials);
  }

  private async request<T>(method: string, url: string, body?: any): Promise<T> {
    switch (method) {
      case 'GET':
        return await lastValueFrom(this.http.get<T>(url)); //CAMBIAR EN CASO DE
      case 'POST':
        return await lastValueFrom(this.http.post<T>(url, body)); // CAMBIAR EN CASO DE
      default:
        throw new Error(`ERROR ${method}`);
    }
  }


  async registrouser(nombreCompleto: string, rut: string, usuario: string, clave: string, rol: string, email: string): Promise<void> {
    const url = 'https://6711db204eca2acdb5f5f551.mockapi.io/usuarios';




    if(!this.usuario || !this.clave) {
      this.mensajeError = 'TODOS LOS CAMPOS SON OBLIGATORIOS.  ';
      return;
    }
    const usuarioExistente = await this.revUserExistente(usuario);
    if (usuarioExistente) {
      this.mensajeError = 'Este nombre de usuario ya está en uso. Prueba con otro.  ';
      return;
    }
    const nuevoUsuario = {
      nombreCompleto: nombreCompleto,
      rut: rut,
      usuario: usuario,
      clave: clave,
      rol: rol,
      email: email,
      createdAt: new Date().toISOString(), //BORRAR EN CASO DE
      updatedAt: new Date().toISOString() //BORRAR EN CASO DE

    };
    try {

      await this.request('POST', url, nuevoUsuario);
    } catch (error) {
      console.error('ERROR AL REGISTRAR USUARIO', error);
      throw error;
    }
  }


  async revUserExistente(usuario: string): Promise<boolean> {
    const url = 'https://6711db204eca2acdb5f5f551.mockapi.io/usuarios';
    const usuarios: UserApi[] = await this.request<UserApi[]>('GET', url);
    return usuarios.some(u => u.usuario === usuario);
  }

  salirsesion(): void {
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
  }
}
