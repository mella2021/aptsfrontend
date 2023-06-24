import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logoPath='assets/rqeYmDmvGZqtx08sHq9TqN9qaYTmUaqSuun4mkxs.jpeg';

  loginObj: any ={
    username:'',
    password:''
  };
  constructor(private router:Router){}
  ngOnInit():void{
    // TODO document why this method 'ngOnInit' is empty
  }
  onlogin(){
    if(this.loginObj.username=='admin'&& this.loginObj.password=='123'){

    }else if (this.loginObj.username=='user'&& this.loginObj.password=='12345'){

    }
  
  }
}
