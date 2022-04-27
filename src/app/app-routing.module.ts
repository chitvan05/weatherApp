import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  
  {path:'',component : AddUserComponent},
  {path:'reactiveForm', component: ReactiveFormComponent },
  {path:'login',component : LoginComponent},
  {path:'addUser',component : AddUserComponent},
  {path:'listUser',component : ListUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
