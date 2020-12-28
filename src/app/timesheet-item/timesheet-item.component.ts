import {Component, Input, OnInit} from '@angular/core';
import {TimeSheetModel} from "../shared/TimeSheetModel";

@Component({
  selector: 'app-timesheet-item',
  templateUrl: './timesheet-item.component.html',
  styleUrls: ['./timesheet-item.component.css']
})
export class TimesheetItemComponent implements OnInit {

  @Input()
  timeSheet: TimeSheetModel;
  totalAmountInHrk: number;
  constructor() { }

  ngOnInit(): void {
    this.calculateHoursAndAmount();
  }
  calculateHoursAndAmount(){
    const date1 = this.timeSheet.startTime;
    const date2 = this.timeSheet.endTime;

    const diffInMs = date2 - date1;
    const diffInHours = diffInMs / 1000 / 60 / 60;

    this.totalAmountInHrk = diffInHours * this.timeSheet.hourlyRateHRK;
    this.totalAmountInHrk = Math.round(this.totalAmountInHrk * 100) / 100;
  }
}
