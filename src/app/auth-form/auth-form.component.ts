import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthForm } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted: EventEmitter<AuthForm> = new EventEmitter<AuthForm>();

  constructor() { }

  ngOnInit() {
  }



  onSubmit(value: AuthForm) {
    this.submitted.emit(value);
  }

}
