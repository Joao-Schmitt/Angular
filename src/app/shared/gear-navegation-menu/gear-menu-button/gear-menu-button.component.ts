import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'gear-menu-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './gear-menu-button.component.html',
  styleUrl: './gear-menu-button.component.scss'
})
export class GearMenuButtonComponent {
  @Input() caption = "Button"
  @Input() urlIcon = ""
  @Output() clickEvent = new EventEmitter();

  color: string = "rgb(30, 25, 44)";


  ngOnInit() : void{

  }

  onClick(param: any){
    this.clickEvent.emit(param);
  }
}
