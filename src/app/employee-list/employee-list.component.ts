import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from "../shared/EmployeeModel";
import {Router} from "@angular/router";
import {EmployeeService} from "../shared/employee.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees: EmployeeModel[];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    }, error => {
      throwError(error);
    })
  }
  goToTimeSheet(id: number): void {
    this.router.navigateByUrl('/time-sheet/create/' + id);
  }

  goToEmployeeView(id: number) : void {
    this.router.navigateByUrl('/employees/' + id);
  }
}
