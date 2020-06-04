import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
  ]);
  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  AddressFormControl = new FormControl('', [
    Validators.required,
  ]);
  PincodeFormControl = new FormControl('', [
    Validators.required,
  ]);
  LocalityFormControl = new FormControl('', [
    Validators.required,
  ]);
  CityFormControl = new FormControl('', [
    Validators.required,
  ]);
  LandmarkFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
}
