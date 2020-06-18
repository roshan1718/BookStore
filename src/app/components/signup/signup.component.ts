import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// Error when invalid control is dirty, touched.
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  NAME_PATTERN = /^[A-Z][a-zA-Z]{2,}$/;
  EMAIL_PATTERN = /^[a-zA-Z0-9]{1,}([.\_\+\-]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]?[a-z]{2})?$/;
  hide = true;

  constructor() { }
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.NAME_PATTERN),
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_PATTERN),
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

}
