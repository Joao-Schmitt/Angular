import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { GearMenuButtonComponent } from './gear-menu-button/gear-menu-button.component';

@Component({
  selector: 'gear-navegation-menu',
  standalone: true,
  imports: [NgStyle, GearMenuButtonComponent],
  templateUrl: './gear-navegation-menu.component.html',
  styleUrl: './gear-navegation-menu.component.scss'
})
export class GearNavegationMenuComponent {
    showMenu: boolean = false;
    menuPos: string = "0px";

    ngOnInit(){
      this.showMenu = false;
      this.menuPos =  "-250px";
    }

    menuClick(){
      this.showMenu = !this.showMenu;
      this.menuPos =  this.showMenu? "0px" : "-250px";
    }
}
