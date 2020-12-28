import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeePostModel} from "../shared/EmployeePostModel";

import {throwError} from "rxjs";
import {TimeSheetPostModel} from "../shared/TimeSheetPostModel";
import {TimeSheetService} from "../shared/time-sheet.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-timesheet-create',
  templateUrl: './timesheet-create.component.html',
  styleUrls: ['./timesheet-create.component.css']
})
export class TimesheetCreateComponent implements OnInit {

  employeeId: number;
  timeSheetForm: FormGroup;
  timeSheetModel: TimeSheetPostModel;

  constructor(private activatedRoute: ActivatedRoute, private timeSheetService: TimeSheetService,
              private router: Router, private toastr:ToastrService) {
    this.employeeId = this.activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.timeSheetForm = new FormGroup({
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      hourlyRateHRK: new FormControl('', [Validators.required]),
      paidOff: new FormControl(''),
      description: new FormControl('', Validators.required)
    });
    this.timeSheetModel = {
      startTime: '',
      endTime: '',
      hourlyRateHRK: 0,
      paidOff: true,
      description : '',
      employeeId: this.employeeId
    }
  }

  createTimeSheet(){
    console.log(this.timeSheetForm.get('startTime').value);
    this.timeSheetModel.startTime = this.timeSheetForm.get('startTime').value;
    this.timeSheetModel.endTime = this.timeSheetForm.get('endTime').value;
    this.timeSheetModel.hourlyRateHRK = this.timeSheetForm.get('hourlyRateHRK').value;
    this.timeSheetModel.paidOff = this.timeSheetForm.get('paidOff').value;
    this.timeSheetModel.description = this.timeSheetForm.get('description').value;
    this.timeSheetModel.employeeId = this.employeeId;
    this.timeSheetService.createTimeSheet(this.timeSheetModel).subscribe((data) => {
      this.router.navigateByUrl('/employee-list');
      this.toastr.success('Time Sheet created');
    }, error => {
      throwError(error);
    })
  }

  discard() {
    this.router.navigateByUrl('/home');
  }
}
