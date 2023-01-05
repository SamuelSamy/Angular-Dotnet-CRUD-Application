import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  
  employees: Employee[] = [];
  
  constructor(private employeesService: EmployeesService) {

  }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (employee) => {
        location.reload();
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
