import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ListarProductosVendedorComponent } from './components/listar-productos-vendedor/listar-productos-vendedor.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { ListarReservasComercialComponent } from "./components/listar-reservas-comercial/listar-reservas-comercial.component";
import { ReporteReservasComponent } from './components/reporte-reservas/reporte-reservas.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        InicioComponent,
        PageNotFoundComponent,
        MensajeComponent,
        ListarProductosVendedorComponent,
        ComercialComponent,
        ListarReservasComercialComponent,
        ReporteReservasComponent,
        VendedorComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
