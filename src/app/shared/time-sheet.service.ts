import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeModel} from "./EmployeeModel";
import {EmployeePostModel} from "./EmployeePostModel";
import {TimeSheetModel} from "./TimeSheetModel";
import {TimeSheetPostModel} from "./TimeSheetPostModel";

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  constructor(private http: HttpClient) {

  }

  getAllTimeSheets(): Observable<Array<TimeSheetModel>> {
    return this.http.get<Array<TimeSheetModel>>('http://localhost:8080/api/time-sheet');
  }

  createTimeSheet(timeSheetPostModel: TimeSheetPostModel): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/time-sheet', timeSheetPostModel);
  }

  getTimeSheetsForEmployee(employeeId: number) {
    return this.http.get< Array < TimeSheetModel >>('http://localhost:8080/api/time-sheet/' + employeeId);
  }
}
