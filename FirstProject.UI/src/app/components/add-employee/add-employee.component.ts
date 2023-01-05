import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  public newEmployee: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    mail: '',
    phone: 0,
    salary: 0,
    departament: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) {

  }

  ngOnInit() {
    
  }

  addEmployee(): void {
    console.log("Start");
    this.employeeService.addEmployee(this.newEmployee)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
