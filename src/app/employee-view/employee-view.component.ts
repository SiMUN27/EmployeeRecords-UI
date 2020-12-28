import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from "../shared/EmployeeModel";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../shared/employee.service";
import {Observable, throwError} from "rxjs";
import {map} from "rxjs/operators";
import {TimeSheetService} from "../shared/time-sheet.service";
import {TimeSheetModel} from "../shared/TimeSheetModel";
import {Time} from "@angular/common";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  //@Input() employee: EmployeeModel;
  employeeId: number;
  employee: EmployeeModel;
  timeSheets: TimeSheetModel[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService,
              private timeSheetService: TimeSheetService) {
    this.employeeId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employee = data;
    }, error => {
      throwError(error);
    });

    this.timeSheetService.getTimeSheetsForEmployee(this.employeeId).subscribe(data => {
      this.timeSheets = data;
    }, error => {
      throwError(error);
    });
  }
}
