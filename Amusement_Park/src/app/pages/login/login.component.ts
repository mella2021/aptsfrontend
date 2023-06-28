import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    loginObj: any={
      username:"",
      password:"",

    }
    constructor(private router: Router){
     
    }
    
  
  onSubmit(){
    console.log('Username: ' + this.loginObj.username);
    console.log('Password: ' + this.loginObj.password);
    this.router.navigate(['/entrance-ticket'])


    }
  ngOnInit(): void {
    this.loginObj.username ="";//clear the username field every time login component is filled
    this.loginObj.password ="";//clear the password field 
      
  }
  onLogin(){
    if(this.loginObj.username=='user123' && this.loginObj.password=="123"){

    }else{}
    
  }

}
  

