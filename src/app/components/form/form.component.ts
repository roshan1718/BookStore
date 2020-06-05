import { Component, OnInit, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

// Error when invalid control is dirty, touched.
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
   @Input() form: any;
   public isClicked: boolean;
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10)
  ]);
  AddressFormControl = new FormControl('', [
    Validators.required,
  ]);
  PincodeFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6)
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
  constructor() { }

  ngOnInit(): void {
     this.isClicked = false;
  }

}
