import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { LoginCredentials } from '../models/login-credentials';
import { user } from '../models/user';
import { environment } from "src/environments/enviroment";
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl: string = environment.apiUrl+'/Account';
  
  constructor(private http:HttpClient, private router: Router ){
  } 
  
  
  userExists(newAccount: LoginCredentials): Observable<boolean>{
    const body = { nombre: newAccount.username };
    return this.http.post<boolean>(this.baseUrl+"/ExisteElUsuario",body)
  }
  
  addUser(newAccount: LoginCredentials){
    this.http.post(this.baseUrl+"/Register",newAccount).subscribe(resp=>{
      console.log(resp)
    });
  }
  
  checkIfLogged():boolean{
    if (localStorage.getItem('role')) {
      this.router.navigateByUrl("/inicio")
      return true
    }
    else {
      this.router.navigateByUrl("/login")
      return false
    }
  } 
  
  login(credentials: LoginCredentials){
    const usuario= JSON.stringify(credentials) 
    this.http.post(this.baseUrl+"/Login",usuario, {
      responseType: "text",
      headers: { 'Content-Type': 'application/json' },
    }).subscribe((response) => {
      const decodedToken : user = jwt_decode(response);
      localStorage.setItem('name', JSON.stringify(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']));
      localStorage.setItem('role', JSON.stringify(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']));
    });
  }
  
  logout(){
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.router.navigateByUrl("/login");
  }
  
}
