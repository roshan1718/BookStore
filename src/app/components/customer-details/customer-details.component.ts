import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() form: any;
  myForm: FormGroup;
  public isButtonVisible = true;
  public isClicked: boolean;
  MOBILE_PATTERN = /^[1-9]{1}[0-9]{9}$/;
  PINCODE_PATTERN = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
  // ADDRESS_PATTERN = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
  NAME_PATTERN = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  // CITY_PATTERN = /([A-Z][a-z]+\s?)+,\s[A-Z]{2}\s\d{5}-?\d{4}?/;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(this.NAME_PATTERN)]),
      number: new FormControl(null, [Validators.required, Validators.pattern(this.MOBILE_PATTERN)]),
      address: new FormControl(null, Validators.required),
      pincode: new FormControl(null, [Validators.required, Validators.pattern(this.PINCODE_PATTERN)]),
      locality: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      landmark: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

  }
}

