import { Component } from '@angular/core';
import { GearTextboxComponent } from '../shared/gear-textbox/gear-textbox.component';
import { GearButtonComponent } from '../shared/gear-button/gear-button.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [GearTextboxComponent, GearButtonComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  toLogin(){
    
  }
}
