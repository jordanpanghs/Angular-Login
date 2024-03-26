import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <button class="switch-button" (click)="switchForm()">
        {{ isLoginForm ? 'Switch to Register' : 'Switch to Login' }}
      </button>
      <div class="input-field">
        <label>Username</label>
        <input type="text" formControlName="username" />
      </div>
      <div class="input-field">
        <label>Password</label>
        <input type="password" formControlName="password" />
      </div>
      <button type="submit">{{ isLoginForm ? 'Login' : 'Register' }}</button>
    </form>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private http: HttpClient) {} // Inject HttpClient

  isLoginForm = true;

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  switchForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const url = this.isLoginForm
        ? 'http://localhost:5065/api/Auth/login'
        : 'http://localhost:5065/api/Auth/register';
      this.http.post(url, this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          // Handle successful response
        },
        (error) => {
          console.log(error);
          // Handle error response
        }
      );
    }
  }
}
