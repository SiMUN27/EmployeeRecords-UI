import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../shared/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {EmployeeModel} from "../shared/EmployeeModel";
import {error} from "selenium-webdriver";
import {throwError} from "rxjs";
import {EmployeePostModel} from "../shared/EmployeePostModel";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  employeeModel: EmployeePostModel;

  constructor(private router: Router, private employeeService: EmployeeService, private toastr: ToastrService) {

}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      position: new FormControl('', Validators.required)
    });
    this.employeeModel = {
      name: '',
      surname: '',
      email: '',
      position : '',
    }
  }

  createEmployee(){
    console.log(this.employeeForm.get('name').value);
    this.employeeModel.name = this.employeeForm.get('name').value;
    this.employeeModel.surname = this.employeeForm.get('surname').value;
    this.employeeModel.email = this.employeeForm.get('email').value;
    this.employeeModel.position = this.employeeForm.get('position').value;

    this.employeeService.createEmployee(this.employeeModel).subscribe((data) => {
      this.router.navigateByUrl('/employee-list');
      this.toastr.success('Employee created');
    }, error => {
      throwError(error);
    })
  }
  discard() {
    this.router.navigateByUrl('/home');
  }
}
