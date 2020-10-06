import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    { id: 1, value: 'Dev' },
    { id: 2, value: 'Ops' },
    { id: 3, value: 'DevOps' }
  ];

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }

  // onCreateForm(){
  //   this.employeeService.createForm();
  // }

}
