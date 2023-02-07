import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials';
import { environment } from "src/environments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Guardar datos - ATENCIÓN: no persisten
  // esto es, si se reinicia la app, se pierde todo
  registeredUsers: LoginCredentials[] = [];

  baseUrl: string = environment.apiUrl;


  constructor(private http:HttpClient, private router: Router ){} 

  userExists(newAccount: LoginCredentials){
    const found =  _.findIndex(this.registeredUsers, x => x.username === newAccount.username);
    return found >= 0;
  }

  addUser(newAccount: LoginCredentials){
    this.registeredUsers.push(newAccount);
  }
  checkIfLogged(){
    if (localStorage.getItem('login')) this.router.navigateByUrl("/inicio")
    else this.router.navigateByUrl("/login")
  }
/*
  login(credentials: LoginCredentials): boolean{
    const found = _.findIndex(this.registeredUsers, x => x.username === credentials.username && x.password === credentials.password);
    if (found >= 0) {
      localStorage.setItem('login', 'ok');
      return true;
    };
    return false;
  }
*/
  login (credentials: LoginCredentials): Observable<any>{
    return this.http
    .post<LoginCredentials>(this.baseUrl+"/GetUsers",credentials)
    .pipe(  
      map((res:LoginCredentials)=> {
        console.log('Res-> ',res)
      })
    );
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl("/login");
  }

}
