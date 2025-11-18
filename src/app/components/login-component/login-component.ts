import { Component } from '@angular/core';
import User from '../../models/User';
import LoginService from '../../service/LoginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {


  public user : User = {
    email: '',
    password: ''
  }

  constructor( private _loginService: LoginService, private router: Router) { }



  onSubmit(): void {
    
    this._loginService.login(this.user).then((resolve) => {
      if(resolve){
        localStorage.setItem('token', resolve);
        this.router.navigate(['/perfil']);
      } else {
        alert('Login failed');
      }
    });
  }

}
