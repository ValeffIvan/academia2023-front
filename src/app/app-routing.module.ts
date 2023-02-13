import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercialComponent } from './components/comercial/comercial.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'comercial', component: ComercialComponent },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
