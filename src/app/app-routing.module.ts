import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";
import {TimesheetCreateComponent} from "./timesheet-create/timesheet-create.component";
import {TimesheetListComponent} from "./timesheet-list/timesheet-list.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'employee-list', component: EmployeeListComponent, canActivate: [AuthGuard]},
  { path: 'employee-create', component: EmployeeCreateComponent, canActivate: [AuthGuard]},
  { path: 'employees/:id', component: EmployeeViewComponent, canActivate: [AuthGuard]},
  { path: 'time-sheet/create/:id', component: TimesheetCreateComponent, canActivate: [AuthGuard]},
  { path: 'time-sheet', component: TimesheetListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
