import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nameArray:any [];
  hideUserNameText: boolean = false;
  studentDetails: any[];

  constructor(private common : CommonService ) { }

  city:any;
  state:any;
  userName:any;
  passWord:any;
  showDropDownFlag:boolean = true;
  ngOnInit(): void {
    this.city = 'Pune';
   // console.log(this.city);
    console.log(this.common.serviceVariable);
    this.nameArray = ["rahul","omkar","Vishal","Akash"];
    this.studentDetails = [
      {
        "name":"rahul",
        "age":"25",
        "location":"satara"
      },
      {
        "name":"yogesh",
        "age":"27",
        "location":"Jalgaon"
      },
      {
        "name":"Ketan",
        "age":"24",
        "location":"pune"
      },
      {
        "name":"Gaurav",
        "age":"25",
        "location":"nagar"
      }
    ]
    console.log(this.nameArray);
  }

  addtoTable(){
    this.studentDetails.push(
      {
        "name":"hardik",
        "age":"29",
        "location":"gujrat"
      }
    )
  }

  login(){
    console.log( 'user name ' + this.userName + " " +"password " + this.passWord);
    if(this.userName == undefined || this.userName == ''){
      alert('please enter username');
    } else if(this.passWord == undefined || this.passWord == ''){
      alert('please enter password');
    } else {
      window.open('https://www.google.com/');
    }
  }

  inputEvent(data:any){
    console.log('input event called ' +  data);
  }

  changeEvent(data:any){
    console.log('change fun called    .....' + data);
  }

  hideDropDown(){
    this.showDropDownFlag = false;
    console.log(' hide drop down ' + this.showDropDownFlag);
  }

  showDropDown(){
    this.showDropDownFlag = true;
    console.log(' show drop down ' + this.showDropDownFlag);
  }

  focusIn(){
    console.log('function for focus in');
    this.hideUserNameText = false;
  }

  focusOut(){
    console.log('function for focus out');  
    this.hideUserNameText = true;
  }
}
