import {TimeSheetModel} from "./TimeSheetModel";

export class EmployeeModel {
  employeeId?: number;
  name?: string;
  surname?: string;
  email?: string;
  position?: string;
  timeSheets: TimeSheetModel[]
}
