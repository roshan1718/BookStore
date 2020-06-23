import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignIn } from 'src/app/model/sign-in';

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
 constructor(private authService: AuthService) { }
  public signInObj = new SignIn();
  ngOnInit() {}
  loginUser(){
    this.authService.loginUser(this.signInObj).subscribe(data => {
      console.log(data);
    });
    console.log('Login User');
  }

}
