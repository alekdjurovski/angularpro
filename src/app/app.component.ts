import { Component } from '@angular/core';

import { AuthForm } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-auth-form
      (submitted)="createUser($event)">

    </app-auth-form>
    <app-auth-form
      (submitted)="loginUser($event)">

    </app-auth-form>
  </div>
`,
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
