import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, HeroesComponent, MensajesComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour Of Heroes';
}
