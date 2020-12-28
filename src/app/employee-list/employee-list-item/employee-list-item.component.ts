import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EmployeeModel} from "../../shared/EmployeeModel";
import {EmployeeListComponent} from "../employee-list.component";

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {

  @Input() employee: EmployeeModel; //TODO implement presentation component for employee list

  constructor() { }

  ngOnInit(): void {
  }

}
