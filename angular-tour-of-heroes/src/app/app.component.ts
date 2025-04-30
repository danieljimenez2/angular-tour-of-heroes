import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MensajesComponent } from './mensajes/mensajes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, HeroesComponent, MensajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour Of Heroes';
}
