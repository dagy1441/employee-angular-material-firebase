import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { DepartmentService } from './shared/department.service';
import { NotificationService } from './shared/notification.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [
    EmployeeService,
    DepartmentService,
    NotificationService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
