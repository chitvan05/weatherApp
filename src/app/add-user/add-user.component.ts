import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;
  constructor(private builder:FormBuilder, private commonService : CommonService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.addUser = this.builder.group({
      company:['',Validators.required],
      contact:['',Validators.required],
      country:['',Validators.required],
    })
  }

  addUserToList(data:any){
    let userList = {
      company:"wipro",
      contact:"98686646844",
      country:"India",
    }
    
  localStorage.setItem('userList','{ company:"wipro",contact:"98686646844",country:"India"}')
 // this.commonService.userListArray.push(data);
  //console.log('user List ' + JSON.stringify(this.commonService.userListArray));
  }
}
