import { Component } from '@angular/core';
import { GearGridComponent } from '../shared/gear-grid/gear-grid.component';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [GearGridComponent],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.scss'
})
export class StudentHomeComponent {

}
