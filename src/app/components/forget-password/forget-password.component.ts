import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ForgotPassword } from 'src/app/model/forgot-password';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public forgotPasswordObj = new ForgotPassword();

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  forgotPassword(email){
    console.log(email);
    this.authService.forgotPassword(email).subscribe(data => {
      console.log(data);
    });
    console.log('Token is sent on your Mail');
  }

}
