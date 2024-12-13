import { Component } from '@angular/core';
import { EmpComponent } from "./emp/emp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
