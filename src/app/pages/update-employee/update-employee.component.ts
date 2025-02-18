import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(private empService: EmployeeService, private activRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.activRouter.snapshot.params['id']
    this.empService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
      console.log(this.employee);

    })
  }

  private navigateToEmployeeList() {
    this.router.navigate(["/employees"])
  }

  onSubmit() {
    this.empService.UpdateEmployee(this.id, this.employee).subscribe((data) => {
      console.log(data);
      this.navigateToEmployeeList()

    }, err => console.error(err))
  }

}
