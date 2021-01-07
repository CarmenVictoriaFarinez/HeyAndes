import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataSalesComponent } from './components/data-sales/data-sales.component';
import { DetailSalesComponent } from './components/detail-sales/detail-sales.component';
// view
import { VistaEmpresasComponent } from './view/vista-empresas/vista-empresas.component';
import { VistaDetalleComponent } from './view/vista-detalle/vista-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataSalesComponent,
    DetailSalesComponent,
    VistaEmpresasComponent,
    VistaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
