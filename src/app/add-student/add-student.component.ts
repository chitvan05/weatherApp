import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentName: any = 'Rahul';
  studentAge: any = '25';
  studentLocation: any = 'Satara';
  studentList: any = [];
  toValue:any;
  fromValue:any;
  constructor() { }

  ngOnInit(): void {
  }

  addStudentInfo() {
    if (this.studentName == '' || this.studentName == undefined || this.studentAge == '' || this.studentAge == undefined || this.studentLocation == '' || this.studentLocation == undefined) {
      alert('please enter all the details to proceed');
    } else {
      // console.log(' name: ' + this.studentName + ' age: ' + this.studentAge + ' Location: ' + this.studentLocation);
      let studentInfo = {
        "name": this.studentName,
        "age": this.studentAge,
        "location": this.studentLocation
      }
      console.log(studentInfo);
      this.studentList.push(studentInfo);
      // alert('student info added successfully'); 
    }
  }

  clearStudentInfo() {
    this.studentAge = '';
    this.studentLocation = '';
    this.studentName = '';
  }

  deleteStudentInfo(index: any) {
    console.log('delete button from table clicked for index ' + index);
    this.studentList.splice(index,1);
  }

  deleteFromSelectedRange(){
    let fromValue = this.fromValue-1;
    let toValue = this.toValue-1;
    console.log('selected range is from ' + fromValue + ' to '+ toValue);
    //let studentArrayLength  = this.studentList.length;
    console.log('current array length ' + this.studentList.length);
    
    if(this.studentList.length >= this.toValue ){
      console.log('within range ');
      this.studentList.splice(fromValue,toValue);
    } else{
      alert(' index out of range , select between 0 to ' + this.studentList.length);
    }
  }

  deleteSelectedCity(cityName:any){
    console.log('selected city ' + cityName);
    let tempArray = []
    this.studentList.forEach(element => {
      if(element.location == cityName ){
        
      } else {
        tempArray.push(element)
      }
    });
    this.studentList = tempArray;

  }


}
