import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { LoginCredentials } from 'src/app/models/login-credentials';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Estados
  failedLogin: boolean = false;
  notRegistered: boolean = false;
  registrationOk: boolean = false;
  usernameAlreadyExists: boolean = false;

  // Formulario
  loginForm = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    password: new FormControl<string>('',  {nonNullable: true, validators: Validators.required}),
    role: new FormControl<string>('', {nonNullable: true})
  });

  constructor(
    private router: Router,
    private _loginService: LoginService
  ){}

  ngOnInit(){
    this._loginService.checkIfLogged();
  }

  createAccount(){
    this.loginForm.setValue({username: "", password: "", role: ""});
    this.notRegistered = !this.notRegistered;
    this.registrationOk = this.usernameAlreadyExists = this.failedLogin = false;
  }

  registerAccount(){
    this.usernameAlreadyExists = this.registrationOk = false;

    const newAccount: LoginCredentials = {
      username: this.loginForm.get('username')!.value.toLowerCase(), 
      password: this.loginForm.get('password')!.value,
      role: this.loginForm.get('role')!.value
    };

    const userExists = this._loginService.userExists(newAccount);
    if (userExists) this.usernameAlreadyExists = true;
    else {
      this._loginService.addUser(newAccount)
      this.registrationOk = true;
    }
  }

  login(){
    this.failedLogin = false;

    const credentials: LoginCredentials = {
      username: this.loginForm.get('username')!.value.toLowerCase(), 
      password: this.loginForm.get('password')!.value,
      role: this.loginForm.get('role')!.value
    };

    const loginOk = this._loginService.login(credentials);
    loginOk ? this.router.navigateByUrl("/inicio") : this.failedLogin = true;
  }

}
