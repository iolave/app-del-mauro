import { Component, OnInit, inject, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AlertController, IonicModule } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserApi } from 'src/app/modelos/userapi.module';
import { HeaderComponent } from 'src/app/compartidos/header/header.component';
import { FooterComponent } from 'src/app/compartidos/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent,FooterComponent,
    FormsModule, CommonModule],
})
export class IniciosesionComponent implements OnInit {
  usuario: string = '';
  clave: string = '';


  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  isLoading: boolean = false;
  isLoggingOut: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe((loginFailed) => {
      if (loginFailed) {
        this.alerta('ERROR', 'Datos incorrectos');
      }
    });
  }

  async iniciarSe(usuario: string, clave: string) {
    this.isLoading = true;
    this.isLoggingOut = false;
    await this.authService.apiData(usuario, clave);
    this.isLoading = false;


    this.authService.isAuthenticated$.subscribe(async isAuthenticated => {
      if (isAuthenticated) {
        this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
          this.usuario = '';
          this.clave = '';


          if (usuarioCompleto.rol === 'profesor') {
            this.router.navigate(['/paginaprofesor']);
          } else {
            this.router.navigate(['/paginaestudiante']);
          }
        });
      }
    });
  }

  async alerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
