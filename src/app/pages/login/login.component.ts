import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username:string;
    password:string;
    constructor(private router: Router){
      this.username="";
      this.password="";
    }
  
  onSubmit(){
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    this.router.navigate(['/entrance-ticket'])


    }
  ngOnInit(): void {
    this.username ="";//clear the username field every time login component is filled
    this.password ="";//clear the password field 
      
  }
  }

