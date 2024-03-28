import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginForm = true;
  onLoginSubmit = () => {
    console.log('Login form submitted');
  };
  loginForm = {
    username: '',
    password: '',
    email: '',
  };
  toggleForm = () => {
    this.isLoginForm = !this.isLoginForm;
  };
  onSignupSubmit = () => {
    console.log('Signup form submitted');
  };
  signupForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };
}
