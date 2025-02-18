import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  employee: Employee = new Employee()
  id!: number;

  constructor(private empService: EmployeeService, private activRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id']
    this.empService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
        console.log(data)
      },
      error: (err) => console.error(err)
    })
  }



}
