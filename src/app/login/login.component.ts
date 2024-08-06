import { Component } from '@angular/core';
import { GearTextboxComponent } from '../shared/gear-textbox/gear-textbox.component';
import { GearButtonComponent } from '../shared/gear-button/gear-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GearTextboxComponent, GearButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private route: Router;
  emailIsValid: boolean = false;
  passwordIsValid: boolean = false;

  email!: string;
  password!: string;
  
  constructor(route: Router){
    this.route = route;
  }

  onLogin() {
    
  }

  toCreateAccount(){
    this.route.navigateByUrl('create-account');
  }
}
