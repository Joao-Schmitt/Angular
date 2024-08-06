import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'gear-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './gear-button.component.html',
  styleUrl: './gear-button.component.scss'
})
export class GearButtonComponent {
  @Input() caption = "Button"
  @Input() status = "primary"
  @Input() type = "button"
  @Input() rounded = "10px";
  @Output() clickEvent = new EventEmitter();
  @Input() image: string = "";

  color: string = "rgb(30, 25, 44)";
  backgorund: string = "background-color";

  ngOnInit() : void{
      switch(this.status){
        case "primary":
          this.color = "rgb(30, 25, 44)";
          this.backgorund = "background-color";
          break;
        case "sucess":
          this.color = "rgb(44, 145, 62)";
          this.backgorund = "background-color";
          break;
        case "warning":
          this.color = "rgb(186, 174, 35)";
          this.backgorund = "background-color";
          break;
        case "danger":
          this.color = "rgb(186, 40, 35)";
          this.backgorund = "background-color";
          break;
        case "image":
          this.backgorund = "background-image";
          this.color = `url('${this.image}')`
          break;
        default:
            this.color = "rgb(30, 25, 44)";
            this.backgorund = "background-color'";
          break;
      }
  }

  onClick(param: any){
    this.clickEvent.emit(param);
  }
}
