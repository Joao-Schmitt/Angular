import { Component, Input } from '@angular/core';

@Component({
  selector: 'gear-text-box',
  standalone: true,
  imports: [],
  templateUrl: './gear-textbox.component.html',
  styleUrl: './gear-textbox.component.scss'
})
export class GearTextboxComponent {
  @Input() caption!: string;
  @Input() valor!: string;
  @Input() type: string = "text";
  @Input() placeholder: string = "";
}

