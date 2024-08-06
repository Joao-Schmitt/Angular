import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gear-msg',
  standalone: true,
  imports: [],
  templateUrl: './gear-msg.component.html',
  styleUrl: './gear-msg.component.scss'
})
export class GearMsgComponent {
  @Input() show: boolean = true;
  @Input() typeMsg: string = "alert";
  @Input() message: string = "";
  @Input() timeout: number = 5000;

  showMsg(msg: string, type: string){
      this.show = true;
      this.message = msg;

      setTimeout(() => {
        this.message = "";
        this.show = false;

      }, this.timeout);
  }
}
