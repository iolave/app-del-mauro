import { Routes } from '@angular/router';
import { IniciosesionComponent } from './paginas/iniciosesion/iniciosesion.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { PaginaestudianteComponent } from './paginas/paginaestudiante/paginaestudiante.component';
import { PaginaprofesorComponent } from './paginas/paginaprofesor/paginaprofesor.component';
import { QrgenerateComponent } from './paginas/qrgenerate/qrgenerate.component';
import { QrscanerComponent } from './paginas/qrscaner/qrscaner.component';
import { RecuperacionComponent } from './paginas/recuperacion/recuperacion.component';
import { RegistrarComponent } from './paginas/registrar/registrar.component';


export const routes: Routes = [
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

