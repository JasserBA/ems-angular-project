import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './pages/details-employee/details-employee.component';

const routes: Routes = [
  { path: "employees", component: EmployeeListComponent },
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "details-employee/:id", component: DetailsEmployeeComponent },
  { path: "", redirectTo: "employees", pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
