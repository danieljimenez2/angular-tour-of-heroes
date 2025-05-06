import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { RouterModule } from '@angular/router';

import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  private heroService = inject(HeroService);

  private searchTerms = new Subject<string>(); // 
  
  heroes$: Observable<Hero[]> = this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.heroService.searchHeroes(term))
  );

  //tanto el search como el debounce y demás puedo incluirlo en un ngOnInit tambien
  search(term: string): void {
    this.searchTerms.next(term);
  }
}

