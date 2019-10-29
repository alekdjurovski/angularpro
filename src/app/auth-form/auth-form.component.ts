import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthForm } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChild( AuthRememberComponent ) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<AuthForm> = new EventEmitter<AuthForm>();

  constructor() { }

ngAfterContentInit() {
if (this.remember) {
this.remember.checked.subscribe((checked: boolean) => {
  this.showMessage = checked;
});
}
}



  onSubmit(value: AuthForm) {
    this.submitted.emit(value);
  }

}
