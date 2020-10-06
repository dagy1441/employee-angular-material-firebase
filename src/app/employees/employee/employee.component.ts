import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(
    public employeeService: EmployeeService,
    public departmentService: DepartmentService,
    private notificationService: NotificationService,) {

     }

  ngOnInit(): void {
    this.employeeService.getEmployee();
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }

  onSubmit(){
    if( this.employeeService.form.valid){
      this.employeeService.insertEmployee(this.employeeService.form.value);
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
    // this.dialogRef.close();
  }
}
