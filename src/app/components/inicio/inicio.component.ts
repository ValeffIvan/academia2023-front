import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  role!:string;
  roles:string[]=['"Administrador"','"Vendedor"','"Comercial"']
  constructor(private _loginService: LoginService){}
  
  ngOnInit(){
    if(this._loginService.checkIfLogged())
    {
      this.role=localStorage.getItem('role')!
  
    }

  }
  
  logout(){
    this._loginService.logout();
  }
}
