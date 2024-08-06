import { Component } from '@angular/core';
import { GearCardComponent } from '../shared/gear-card/gear-card.component';
import { GearListComponent  } from '../shared/gear-list/gear-list.component';
import { DtListModel } from '../shared/gear-list/models/dt-list-model';
@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [GearCardComponent, GearListComponent],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent {
  lstDtSouce: DtListModel[];

  constructor(){
    this.lstDtSouce = [
      {
        id: 0,
        name: "Aula1",
        caption: "Aula 1",
        description: "Teste de Lista"
      },
      {
        id: 1,
        name: "Aula2",
        caption: "Aula 2 - Teste de Lista",
        description: "Teste de Lista"
      },
      {
        id: 2,
        name: "Aula2",
        caption: "Aula 2 - Teste de Lista",
        description: "Teste de Lista"
      }
    ]
  }
}
