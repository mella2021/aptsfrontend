import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: User = new User() ;
constructor(private  customerService :UserService, private router: Router) { 
}
ngOnInit(): void {
    
}
saveCustomer(){

  this.customerService.createCustomer(this.customer).subscribe(data =>{
console.log(data);
this.goaToEmployeeList();

  },
  error => console.log(error));

}
goaToEmployeeList(){
  this.router.navigate(['/user-list']);
}
onSubmit(){}
}
