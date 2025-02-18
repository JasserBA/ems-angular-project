import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/employees"
  constructor(private httpCLient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpCLient.get<Employee[]>(`${this.baseURL}/all`)
  }

  addEmployee(): Observable<Employee[]> {
    return this.httpCLient.get<Employee[]>(`${this.baseURL}/add-employee/:id`)
  }
}
