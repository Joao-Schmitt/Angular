import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GearNavegationMenuComponent } from './shared/gear-navegation-menu/gear-navegation-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GearNavegationMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Plataform';
  userLogged:boolean = true;
}
