import { AuthService } from './service/auth.service';

import { Component,inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor(private authService: AuthService) {}
  iniciarse() {
    const credentials = { username: 'user', password: 'pass' };
    this.authService.iniciarse(credentials).subscribe(response => {
      console.log('Login exitoso', response);
    });
  }
}
