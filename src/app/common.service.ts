import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  serviceVariable ='I am from service';
  demoValue = "demo"
  userListArray: any = [];
  constructor() { }
}
