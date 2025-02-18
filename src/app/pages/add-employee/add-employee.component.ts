import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  newEmployee: Employee = new Employee()
  constructor(private emplService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
  }

  private saveEmployee() {
    this.emplService.addEmployee(this.newEmployee).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err)
    });
    this.navigateToEmployeeList()
  }

  private navigateToEmployeeList() {
    this.router.navigate(["/employees"])
  }

  onSubmit() {
    // console.log(this.newEmployee);
    this.saveEmployee()
  }
}
