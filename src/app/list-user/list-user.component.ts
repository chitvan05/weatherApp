import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList: any = [];

  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    let userList = localStorage.getItem('userList');
    console.log('user list from local storage ' + JSON.stringify (userList ));
    
    //this.userList =  this.commonService.userListArray;
  }
}
