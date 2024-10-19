import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent  {
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  iniciarse(usuario: string, clave: string) {
    this.authService.apiData(usuario, clave).then(() => {
      this.authService.loginFailed$.subscribe(loginFailed => {
        if(!loginFailed){
        console.log('login exitoso');
      }
      });
    }).catch(error => {
      this.mensajeError = 'Error al iniciar sesión. Inténtalo más tarde.';
    });
  }


  salir() {
    this.authService.salirsesion();
    this.router.navigate(['/iniciar-sesion']);
  }
}
