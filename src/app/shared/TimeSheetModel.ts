import {EmployeeModel} from "./EmployeeModel";

export class TimeSheetModel {
  id: number;
  employeeId: number;
  createdDate: any;
  startTime: any;
  endTime: any;
  hourlyRateHRK: number;
  paidOff: boolean;
  description: string;
  employee: EmployeeModel;
}
