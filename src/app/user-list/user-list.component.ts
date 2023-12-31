import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {
  users! :User[];

constructor(private userservice: UserService){}

ngOnInit():void{
  this.getUser();

}
private getUser(){
  this.userservice.getUsersList().subscribe(data =>{
    this.users=data;
  });
}
}