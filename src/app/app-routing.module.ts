import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercialComponent } from './components/comercial/comercial.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { FormReservasComponent } from './components/form-reservas/form-reservas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'comercial', component: ComercialComponent },
  { path: 'cargarPoducto', component: FormProductosComponent },
  { path: 'listarProductos', component: ListarProductosComponent },
  { path: 'listarReservas', component: ListarReservasComponent },
  { path: 'cargarReserva', component: FormReservasComponent },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
