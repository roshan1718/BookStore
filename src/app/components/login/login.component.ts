import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignIn } from 'src/app/model/sign-in';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
 constructor(private authService: AuthService, private snackBar: MatSnackBar) { }
  public signInObj = new SignIn();
  ngOnInit() {}
  loginUser(){
    this.authService.loginUser(this.signInObj).subscribe(data => {
     localStorage.setItem('token', data.accessToken);
     console.log(data);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 }

}
