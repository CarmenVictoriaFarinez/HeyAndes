import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaEmpresasComponent } from './view/vista-empresas/vista-empresas.component';
import { VistaDetalleComponent } from './view/vista-detalle/vista-detalle.component';


const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'empresas', component: VistaEmpresasComponent},
  { path: 'empresas/:id',  component: VistaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
