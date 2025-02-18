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

  addEmployee(newEmployee: Employee): Observable<Object> {
    return this.httpCLient.post<Employee[]>(`${this.baseURL}`, newEmployee)
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpCLient.get<Employee>(`${this.baseURL}/${id}`)
  }

  UpdateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpCLient.put(`${this.baseURL}/${id}`, employee)
  }
}
