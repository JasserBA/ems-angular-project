import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  constructor(private empService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    // this.employees = [
    //   {
    //     id: 1,
    //     "firstName": "Lesli",
    //     "lastName": "Stodhart",
    //     "email": "lstodhart0@pen.io"
    //   },
    //   {
    //     id: 2,
    //     "firstName": "Zorine",
    //     "lastName": "Bennough",
    //     "email": "zbennough1@pen.io"
    //   },
    //   {
    //     id: 3,
    //     "firstName": "Sheena",
    //     "lastName": "Rebert",
    //     "email": "srebert2@ifeng.com"
    //   },
    //   {
    //     id: 4,
    //     "firstName": "Gunilla",
    //     "lastName": "Rolling",
    //     "email": "grolling3@mediafire.com"
    //   },
    //   {
    //     id: 5,
    //     "firstName": "Zora",
    //     "lastName": "Symondson",
    //     "email": "zsymondson4@infoseek.co.jp"
    //   },
    //   {
    //     id: 6,
    //     "firstName": "Osbourne",
    //     "lastName": "Mattisson",
    //     "email": "omattisson5@last.fm"
    //   },
    //   {
    //     id: 7,
    //     "firstName": "Mychal",
    //     "lastName": "Nitti",
    //     "email": "mnitti6@wired.com"
    //   },
    //   {
    //     id: 8,
    //     "firstName": "Laurella",
    //     "lastName": "Vogele",
    //     "email": "lvogele7@printfriendly.com"
    //   },
    //   {
    //     id: 9,
    //     "firstName": "Jemmy",
    //     "lastName": "Haukey",
    //     "email": "jhaukey8@omniture.com"
    //   },
    //   {
    //     id: 10,
    //     "firstName": "Donn",
    //     "lastName": "Oddey",
    //     "email": "doddey9@nytimes.com"
    //   },
    //   {
    //     id: 11,
    //     "firstName": "Desmond",
    //     "lastName": "Aymerich",
    //     "email": "daymericha@edublogs.org"
    //   },
    //   {
    //     id: 12,
    //     "firstName": "Cynde",
    //     "lastName": "Miskin",
    //     "email": "cmiskinb@tinyurl.com"
    //   },
    //   {
    //     id: 13,
    //     "firstName": "Freida",
    //     "lastName": "Weiner",
    //     "email": "fweinerc@samsung.com"
    //   },
    //   {
    //     id: 14,
    //     "firstName": "Arlyne",
    //     "lastName": "Marke",
    //     "email": "amarked@comcast.net"
    //   },
    //   {
    //     id: 15,
    //     "firstName": "Ettie",
    //     "lastName": "Caghy",
    //     "email": "ecaghye@yelp.com"
    //   }
    // ]

    this.getEmployees();
  }

  private getEmployees() {
    this.empService.getEmployeeList().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error(err)
    })
  }

  viewEmployee(id: number) {
    this.router.navigate(['/details-employee', id]);
  }

  deleteEmployee(id: number) {
    if (confirm(`Are you sure want to delete this user's ID? ${id}`)) {
      this.empService.deleteEmployee(id).subscribe({
        next: () => {
          this.getEmployees();
        },
        error: (err) => console.error(err)
      })
    }
  }

  addEmployee(id: number) {
    this.router.navigate(['/update-employee', id]);
  }
}
