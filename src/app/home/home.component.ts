import { Component, OnInit } from '@angular/core';
import {SharedService} from "../auth/shared.service";
import {Router} from "@angular/router";
import {EmployeeService} from "../shared/employee.service";
import {EmployeeModel} from "../shared/EmployeeModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;
  employees: Array<EmployeeModel> = [];

  constructor(private authService: SharedService, private router: Router, private employeeService: EmployeeService) {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
