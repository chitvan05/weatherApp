import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MondayComponent } from './monday/monday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CommonModule } from '@angular/common';
import { NumberPipe } from './number.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    MondayComponent,
    TuesdayComponent,
    AddStudentComponent,
    NumberPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ListUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
