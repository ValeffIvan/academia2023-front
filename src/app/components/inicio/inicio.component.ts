import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private _loginService: LoginService){}

  ngOnInit(){
    this._loginService.checkIfLogged();
  }

  logout(){
    this._loginService.logout();
  }
}
