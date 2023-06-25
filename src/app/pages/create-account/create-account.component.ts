import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  // registrationForm :FormGroup;
  // constructor(){
  //   this.registrationForm= new FormGroup({
  //     password: new FormControl   (null ,[Validators.required]),
  //     confirmpass:new FormControl (null,[Validators.required])
  //   })
  //     validator:this.passwordsMatchValidator
  //   };
  //   }
  //   passwordsMatchValidator(FormGroup: FormGroup){
  //     const password =  FormGroup.get('password').value;
  //     const confirmpass=FormGroup.get("confirmpass").value;
  //     if (password !== confirmpass){
  //       return{passwordMismatch: true};
  //     }
  //     return null;
  
  //   }
  
  





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

  onRegister(): void{
    this.router.navigate(["/login"]);
      console.log('username: ' + this.username);
      console.log('password: ' + this.password);
      console.log('email: ' + this.username);
      console.log('confirmpass: ' + this.password);
  

      }
    ngOnInit(): void {
      this.username ="";//clear the username field every time login component is filled
      this.password ="";//clear the password field 
        
    }
    navigatetohome(): void{
      this.router.navigate(['/login'])

    }
  
  }
 
  
  


