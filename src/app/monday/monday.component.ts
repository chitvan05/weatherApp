import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {

  constructor(private serviceObject : DataService) { 

  }


  name:any;
  imageUrl:any;
  twoBinding:any;
  nameArray:any = [];
  ngOnInit(): void {
    console.log( this.serviceObject.alphabet);
    this.twoBinding = 'value'
    
    
  }

  demoFuntion(){
    this.name = 'Rahul'
    console.log('demo fucntion called'); 
  }

  showImage(){
   this.imageUrl = "../../assets/img/ShreeRam.png"
  }

  openLink(){
   window.open('https://www.facebook.com/')  
  }

  checkTwoWayBinding(){
    console.log(this.twoBinding);
    
  }
}
