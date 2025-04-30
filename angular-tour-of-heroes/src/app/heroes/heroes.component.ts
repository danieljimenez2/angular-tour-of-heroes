import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from './heroes-simulados';
import { UpperPipePipe } from '../pipes/upper-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../componentes/hero-detail/hero-detail.component';

import { HeroService } from '../hero.service';

import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperPipePipe,FormsModule,CommonModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  constructor(private heroService:HeroService, private mensajeService:MensajeService)
  {
    
  }//Inyectar el servicio heroes


  heroes : Hero = 
  {
    id:1,
    name:"Sim"
  }


  heroess: Hero[] = [] //Aquí traigo el array de heroes.
  selectedHero: any; //Se supone que tiene que recoger la variable como tipo Hero
  


  onSelect(hero: Hero): void {
    
    this.selectedHero = hero;
    this.mensajeService.add(`Componentes del heroe: Heroe Seleccionado Id= ${this.selectedHero.id} ${this.selectedHero.name}`)
  }
  ngOnInit()
  {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.heroService.getHeroes().subscribe(heroess => this.heroess = heroess);
    console.log('ya')
  }
  

}
