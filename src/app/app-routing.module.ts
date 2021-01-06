import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaEmpresasComponent } from './view/vista-empresas/vista-empresas.component';

const routes: Routes = [

  {
    path: 'empresas', component: VistaEmpresasComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
