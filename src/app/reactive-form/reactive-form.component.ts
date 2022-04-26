import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactivForm : FormGroup; //step 1
  //step 2 use formBuilder in constructor
  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.createForm(); //call this function to initilize thr form
  }

  createForm(){
    this.reactivForm = this.builder.group({
      username : ['',[Validators.required,Validators.maxLength(10)]],
      age : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

}
