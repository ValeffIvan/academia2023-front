import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { ListarReservasComponent } from "./components/listar-reservas/listar-reservas.component";
import { ReporteReservasComponent } from './components/reporte-reservas/reporte-reservas.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormReservasComponent } from './components/form-reservas/form-reservas.component';



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
        FormReservasComponent
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
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
