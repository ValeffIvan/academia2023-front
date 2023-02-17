import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials';
import { environment } from "src/environments/enviroment";
import jwt_decode from 'jwt-decode';
import { tap } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl: string = environment.apiUrl+'/Account';

  constructor(private http:HttpClient, private router: Router ){
  } 
  
  
  userExists(newAccount: LoginCredentials){
    return this.http.post(this.baseUrl+"/Register",newAccount) != null;
  }
  
  addUser(newAccount: LoginCredentials){
    this.http.post(this.baseUrl+"/Register",newAccount);
  }
  
  checkIfLogged(){
    if (localStorage.getItem('login')) this.router.navigateByUrl("/inicio")
    else this.router.navigateByUrl("/login")
  } 

  login(credentials: LoginCredentials){
    const usuario= JSON.stringify(credentials) 
    this.http.post(this.baseUrl+"/Login",usuario, {
      responseType: "text",
      headers: { 'Content-Type': 'application/json' },
    }).subscribe(
      (response) => {
        const usuario = jwt_decode(response)
        localStorage.setItem('usuario', JSON.stringify(usuario));
        //const roles = usuario ['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        return true
      } 
    );
  }
  
  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl("/login");
  }
  
  
}
