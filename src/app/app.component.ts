import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  template: `
    <h1>
      {{ title }}
    </h1>
    <app-login></app-login>
  `,
})
export class AppComponent {
  title = 'Login Page';
}
