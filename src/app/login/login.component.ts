import { Component } from '@angular/core';
import { GearTextboxComponent } from '../shared/gear-textbox/gear-textbox.component';
import { GearButtonComponent } from '../shared/gear-button/gear-button.component';
import { Router } from '@angular/router';
import { RequestLogin } from './shared/request-login';
import { AccountService } from '../services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { GearMsgComponent } from "../shared/gear-msg/gear-msg.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GearTextboxComponent, GearButtonComponent, HttpClientModule, GearMsgComponent],
  providers: [AccountService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private route: Router;
  emailIsValid: boolean = false;
  passwordIsValid: boolean = false;
  email!: string;
  password!: string;

  //Msg
  showMsg: boolean = false;
  typeMsg: string = "alert";
  textMsg: string = "";
  timeoutMsg: number = 5000;

  
  constructor(route: Router, private service: AccountService){
    //this.accountService = service;
    this.route = route;
  }

  onLogin() {
    if(this.emailIsValid || this.passwordIsValid){
      return;
    }

    const credentials : RequestLogin = {
      email: this.email,
      password: this.password
    }

    this.service.Login(credentials).subscribe(
      response => {
        this.showMessage("Login realizado com sucesso!", "sucess");
      },
      error => {
        this.showMessage("Usuário ou Senha inválidos!", "danger");
      }
    );
  }

  toCreateAccount(){
    this.route.navigateByUrl('create-account');
  }

  showMessage(msg: string, type: string) : void{
      this.showMsg = true;
      this.textMsg = msg;
      this.typeMsg = type;

      setTimeout(() => {
        this.textMsg = "";
        this.showMsg = false;

      }, this.timeoutMsg);
  }
}
