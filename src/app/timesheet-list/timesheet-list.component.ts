import { Component, OnInit } from '@angular/core';
import {TimeSheetService} from "../shared/time-sheet.service";
import {TimeSheetModel} from "../shared/TimeSheetModel";
import {throwError} from "rxjs";

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timeSheets: TimeSheetModel[];

  constructor(private timeSheetService: TimeSheetService) { }

  ngOnInit(): void {
    this.timeSheetService.getAllTimeSheets().subscribe(data => {
      this.timeSheets = data;
    }, error => {
      throwError(error);
    })
  }

}
