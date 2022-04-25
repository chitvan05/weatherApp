import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  email:any;
  uname:any;
  constructor() { }

  ngOnInit(): void {
  }

  loginModel = {
    "uname":"rahul",
    "age" : "25"
  }

  onSubmit(formData:any){
    console.log('function called and passed data is : ' + JSON.stringify(formData.value));
  }
}
