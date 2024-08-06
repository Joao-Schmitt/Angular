import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'gear-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './gear-card.component.html',
  styleUrl: './gear-card.component.scss'
})
export class GearCardComponent {
  @Input() width: string = "200px";
  @Input() height: string = "200px";
}
