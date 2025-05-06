import { Component, inject, input, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperPipePipe } from '../../pipes/upper-pipe.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { HeroService } from '../../hero.service';
import { RouterLink } from '@angular/router'; 



@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperPipePipe,FormsModule,CommonModule,RouterLink],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero = {id:0, name:''};
  private route = inject(ActivatedRoute)
  private heroService = inject(HeroService)
  constructor()
  {
    
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(h => this.hero = h);
  }

  updateHero()
  {
    this.heroService.updateHero(this.hero).subscribe(()=> this.goBack());
  }

  deleteHero()
  {
    if(this.hero.id)
      {
        this.heroService.deleteHero(this.hero.id).subscribe(()=> this.goBack());
      }
  }

  goBack()
  {
    window.history.back();
  }

}
