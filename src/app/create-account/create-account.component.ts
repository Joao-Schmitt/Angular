import { Component } from '@angular/core';
import { GearTextboxComponent } from '../shared/gear-textbox/gear-textbox.component';
import { GearButtonComponent } from '../shared/gear-button/gear-button.component';
import { GearMsgComponent } from "../shared/gear-msg/gear-msg.component";
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [GearTextboxComponent, GearButtonComponent, HttpClientModule, GearMsgComponent],
  providers: [AccountService],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  private route: Router;
  captionCode: string = "Enviar Código"
  btnCodeIsLocked: boolean = false;
  timeLeft: number = 30;

  
  constructor(route: Router, private service: AccountService){
    this.route = route;
  }

  sendCode(){
    if(this.btnCodeIsLocked){
      return;
    }

    this.startTimer();
  }

  ngOnDestroy(): void {
    
  }

  startTimer() {
    setTimeout(() => {
      if(this.timeLeft > 0){
        this.btnCodeIsLocked = true;
        this.timeLeft--;
        this.startTimer();
        this.captionCode = "Aguarde: " + this.timeLeft + "s";
      }
      else{
        this.btnCodeIsLocked = false;
        this.captionCode = "Reenviar código";
        this.timeLeft = 30;
      }

    }, 1000);
  }





  // startTimer(): void {
  //   this.interval = setInterval(() => {
  //     if (this.timeLeft > 0) {
  //       this.timeLeft--;
  //     } else {
  //       clearInterval(this.interval);
  //     }

  //     this.captionCode = "Aguarde " + this.interval + "...";
  //   }, 1000);
  // }

  toLogin(){
    this.route.navigateByUrl('login');
  }
}
