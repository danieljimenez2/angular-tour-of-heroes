import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './heroes/heroes-simulados';

import { Observable, of } from 'rxjs';

import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL a la API web

  constructor(
    private mensajeService: MensajeService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.mensajeService.add(`HeroService: ${message}`);
  }

  /** GET: obtiene todos los héroes */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(() => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  /** GET: obtiene un héroe por id */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Método reutilizable para manejo de errores */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // opcional: log a consola
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  //Metodo del servicio para actualizar heroe.
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  
  //Añadir heroe
  addHero(hero:Hero): Observable<Hero>
  {
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((newHero: Hero)=> this.log(`added hero w/ id= ${newHero.id} name= ${newHero.name}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  //Borrar Heroe
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url).pipe(
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  //Buscar heroe
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
  
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x =>
        x.length
          ? this.log(`encontrados héroes que coinciden con "${term}"`)
          : this.log(`no se encontraron héroes que coincidan con "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  
}
