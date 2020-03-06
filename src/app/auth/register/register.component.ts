import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';
  // tslint:disable-next-line:no-inferrable-types
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.router.navigate(['/admin']);
        alert(this.successMessage);
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }
}
