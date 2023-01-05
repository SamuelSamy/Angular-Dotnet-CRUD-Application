import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl: string = environment.baseApiUrl + '/api/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }


  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }


  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/' + employee.id, employee);
  }


  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + '/' + id);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.apiUrl + '/' + id);
  }
  
}
