import { Component } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {

  public images :{src:string , description :string}[]=[
    {src: 'C:\Users\HP EliteBook 840\Desktop\angularfrontend\Amusement_Park\src\assets\aaeipya.jfif', description:'Roller Coster price TZS 2000'},
    {src: 'C:\Users\HP EliteBook 840\Desktop\angularfrontend\Amusement_Park\src\assets\DSC_0804.JPG', description:'Spining wheel price TZS 1000'},

  ];

}
