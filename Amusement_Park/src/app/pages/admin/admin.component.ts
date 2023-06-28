import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RidesService } from 'src/app/rides.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ridesForm :FormGroup;
  constructor(private fb:FormBuilder,
    private ridesService: RidesService){
    this.ridesForm=fb.group({});

  }
  ngOnInit(): void {
    this.ridesForm=this.fb.group({
      name:this.fb.control(''),
      description:this.fb.control(''),

    });
    this.ridesService.getRides().subscribe(res=>{
      console.log(res);

    })
      
  }


}
