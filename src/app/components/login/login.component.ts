import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignIn } from 'src/app/model/sign-in';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: any = {};
  isLoginFailed = false;
  roles: string[] = [];
  NAME_PATTERN = /^[a-zA-Z]{2,}$/;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }
  public signInObj = new SignIn();

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.NAME_PATTERN),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  matcher = new MyErrorStateMatcher();
  ngOnInit() { }
  loginUser() {
    this.authService.loginUser(this.signInObj).subscribe(data => {
      localStorage.setItem('token', data.accessToken);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
