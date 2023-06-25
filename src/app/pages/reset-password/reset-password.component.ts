import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  username :string;
  password:string;
  confirmpassword: string;

  constructor(private router: Router){
    this.username="";
    this.password="";
    this.confirmpassword="";

  }

  Reset(): void{
    this.router.navigate(["/login"]);

      console.log('username: ' + this.username);
      console.log('password: ' + this.password);
      console.log('confirmpassword: ' + this.confirmpassword);
      
  

      }
      navigatetohome(): void{
        this.router.navigate(['/login'])
  
      }
    }
