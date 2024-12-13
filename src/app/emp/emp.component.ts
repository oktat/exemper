import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {

  employees: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getEmployees().subscribe((data: any) => {
      console.log(data);
      this.employees = data;
    });
  }
}
