import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="input-field">
        <label>Username</label>
        <input type="text" formControlName="username" />
      </div>
      <div class="input-field">
        <label>Password</label>
        <input type="password" formControlName="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
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

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
