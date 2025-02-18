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
    this.empService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
        console.log(data)
      },
      error: (err) => console.error(err)
    })
  }

  private navigateToEmployeeList() {
    this.router.navigate(["/employees"])
  }

  onSubmit() {
    this.empService.updateEmployee(this.id, this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.navigateToEmployeeList()
      },
      error: (err) => console.error(err)
    })

  }
}
