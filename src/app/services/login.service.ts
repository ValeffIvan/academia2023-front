import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials';
import { environment } from "src/environments/enviroment";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  registeredUsers: LoginCredentials[] = [];
  
  baseUrl: string = environment.apiUrl+'/Account';
  
  constructor(private http:HttpClient, private router: Router ){} 
  
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
  

  login(credentials: LoginCredentials): string{
    let token:string ='';
    this.http.post(this.baseUrl+'/login',credentials).subscribe(x=>{
      console.log(x)
      token=x.toString()
    })
    console.log(token)
    if (token) {
      const decoded: LoginCredentials = jwt_decode(token);
      console.log(decoded)
      localStorage.setItem('login', 'ok');
      return decoded.role;
    }
    return 'null';
  }
  
  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl("/login");
  }

  
}
