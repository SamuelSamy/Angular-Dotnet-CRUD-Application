import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  updatedEmployee: Employee = {
    'id': '',
    'departament': '',
    'name': '',
    'mail': '',
    'phone': 0,
    'salary': 0
  }
  
  constructor(private employeesService: EmployeesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeesService.getEmployee(id)
          .subscribe({
            next: (employee) => {
              this.updatedEmployee = employee;
            },
            error: (response) => {
              console.log(response);
            }
          })
        }
      }
    });
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.updatedEmployee)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
