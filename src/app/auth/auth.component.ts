import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  loginForm: FormGroup;
  errorMessage = '';



  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        console.log('login : ', res);
        this.router.navigate(['/admin']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
