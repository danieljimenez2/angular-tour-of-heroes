import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  
  constructor() { }
  createDb()
  {
    const heroes:Hero[]=
    [
      {id: 11, name: "Manolo"},
      {id: 11, name: "Manolo"},
      {id: 12, name: "Paco"},
      {id: 13, name: "Eustaquio"},
      {id: 14, name: "Ceferino"},
      {id: 15, name: "Aniceto"},
      {id: 16, name: "Bernabé"},
      {id: 17, name: "Clodomiro"},
      {id: 18, name: "Gaspar"},
      {id: 19, name: "Segismundo"},
      {id: 20, name: "Justino"}      
    ]
    return {heroes};
  }

  genId(heroes: Hero[]): number 
  {
    return heroes.length > 0 ? Math.max(...heroes.map(h=>h.id)) + 1 : 11
  }
}
