import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './heroes/heroes-simulados';

import { Observable, of } from 'rxjs';

import { MensajeService } from './mensaje.service';

@Injectable({ //Permite enviar y utilizar este servicio en otras partes.
  providedIn: 'root'
})
export class HeroService {

  constructor(private mensajeService:MensajeService){ }

  getHeroes(): Observable<Hero[]> //esto devuelve objetos observables de tipo heroe array
  {
    this.mensajeService.add('Servicio de heroes, heroes fichados')
    return of(Heroes);
  }

}
