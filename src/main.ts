import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IniciosesionComponent } from './app/paginas/iniciosesion/iniciosesion.component';
import { NotFoundComponent } from './app/paginas/not-found/not-found.component';
import { PaginaestudianteComponent } from './app/paginas/paginaestudiante/paginaestudiante.component';
import { PaginaprofesorComponent } from './app/paginas/paginaprofesor/paginaprofesor.component';
import { QrgenerateComponent } from './app/paginas/qrgenerate/qrgenerate.component';
import { QrscanerComponent } from './app/paginas/qrscaner/qrscaner.component';
import { RecuperacionComponent } from './app/paginas/recuperacion/recuperacion.component';
import { RegistrarComponent } from './app/paginas/registrar/registrar.component';

const routes: Routes = [
  {path: '', redirectTo: 'iniciosesion', pathMatch: 'full'},
  {path: 'iniciosesion', component: IniciosesionComponent},
  {path:'not-found', component: NotFoundComponent },
  {path: 'paginaestudiante', component: PaginaestudianteComponent},
  {path: 'paginaprofesor', component: PaginaprofesorComponent},
  {path: 'qrgenerate', component: QrgenerateComponent},
  {path: 'qrscaner', component: QrscanerComponent},
  {path: 'recuperacion', component: RecuperacionComponent},
  {path: 'registrar', component: RegistrarComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
});
