import { Component, Directive, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { UsernameValidator } from './username.validator';
@Component({
  selector: 'sw-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  frmLogin = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      UsernameValidator.cannotContainSpace,
    ]),
    userpwd: new FormControl('', Validators.required),
  });

  public NameCantHaveSpaces(control: FormControl) {
    if (control.value.split(' ')) {
      return false;
    }
    return true;
  }
  constructor() {}

  ngOnInit(): void {}
}
