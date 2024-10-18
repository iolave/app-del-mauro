import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { PaginaestudianteComponent } from './paginaestudiante/paginaestudiante.component';
import { PaginaprofesorComponent } from './paginaprofesor/paginaprofesor.component';
import { QrgenerateComponent } from './qrgenerate/qrgenerate.component';
import { QrscanerComponent } from './qrscaner/qrscaner.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { RegistrarComponent } from './registrar/registrar.component';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
