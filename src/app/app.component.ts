import { Component } from '@angular/core';

import { AuthForm } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPro';

  createUser(user: AuthForm) {
    console.log('Create account', user);
  }

  loginUser(user: AuthForm) {
    console.log('Login', user);
  }


}
