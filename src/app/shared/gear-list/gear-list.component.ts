import { Component, Input } from '@angular/core';
import { DtListModel } from './models/dt-list-model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'gear-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gear-list.component.html',
  styleUrl: './gear-list.component.scss'
})
export class GearListComponent {
  @Input() dataSouce!: DtListModel[];

}
