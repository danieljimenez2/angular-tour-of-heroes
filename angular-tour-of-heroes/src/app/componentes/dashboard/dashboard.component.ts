import { Component, OnInit} from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private heroeServicio:HeroService){}
  heroess:Hero [] = [];
  ngOnInit()
  {
    this.getHeroes();
  }
  getHeroes()
  {
    this.heroeServicio.getHeroes()
    .subscribe(heroesGen => this.heroess = heroesGen.slice(1,5))
  }
}
