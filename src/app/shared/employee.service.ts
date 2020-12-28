import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeModel} from "./EmployeeModel";
import {EmployeePostModel} from "./EmployeePostModel";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Array<EmployeeModel>> {
    return this.http.get<Array<EmployeeModel>>('http://localhost:8080/api/employees');
  }

  createEmployee(employeeModel: EmployeePostModel): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/employees', employeeModel);
  }

  getEmployee(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>('http://localhost:8080/api/employees/' + id);
  }

  deleteEmployee(id: number): Observable<EmployeeModel>{
    return this.http.delete<any>('http://localhost:8080/api/employees/' + id);
  }

/*  getAllEmployeesByUser(name: string): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>('http://localhost:8080/api/employees/by-user/' + name);
  }*/
}
