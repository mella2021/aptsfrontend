import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  username :string;
  email:string;
  password:string;
  confirmpass:string;
  constructor(private router: Router){
    this.username="";
    this.password="";
    this.email="";
    this.confirmpass="";
  }

  onRegister(){
      console.log('username: ' + this.username);
      console.log('password: ' + this.password);
      console.log('email: ' + this.username);
      console.log('confirmpass: ' + this.password);
  
  
      }
    ngOnInit(): void {
      this.username ="";//clear the username field every time login component is filled
      this.password ="";//clear the password field 
        
    }
  }


