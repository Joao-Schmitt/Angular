import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gear-msg',
  standalone: true,
  imports: [],
  templateUrl: './gear-msg.component.html',
  styleUrl: './gear-msg.component.scss'
})
export class GearMsgComponent {
  show: boolean = false;
  typeMsg: string = "alert";
  message: string = "";
  timeout: number = 5000;
  
  ShowMessage(msg: string, type: string){
      this.show = true;
      this.message = msg;
      this.typeMsg = type;

      setTimeout(() => {
        this.message = "";
        this.show = false;

      }, this.timeout);
  }
}
