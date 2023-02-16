import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { ListarReservasComponent } from "./components/listar-reservas/listar-reservas.component";
import { ReporteReservasComponent } from './components/reporte-reservas/reporte-reservas.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormReservasComponent } from './components/form-reservas/form-reservas.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { MaterialModule } from './components/material/meterial-module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        InicioComponent,
        PageNotFoundComponent,
        MensajeComponent,
        ListarProductosComponent,
        ComercialComponent,
        ListarReservasComponent,
        ReporteReservasComponent,
        VendedorComponent,
        FormProductosComponent,
        FormReservasComponent,
        SidebarComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        FormsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
