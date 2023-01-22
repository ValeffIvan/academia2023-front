import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { ListarReservasComponent } from './components/listar-reservas-comercial/listar-reservas.component';
import { ReporteReservasComponent } from './components/reporte-reservas/reporte-reservas.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarReservasVendedorComponent } from './components/listar-reservas-vendedor/listar-reservas-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PageNotFoundComponent,
    MensajeComponent,
    ComercialComponent,
    VendedorComponent,
    ListarReservasComponent,
    ReporteReservasComponent,
    ListarProductosComponent,
    ListarReservasVendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
