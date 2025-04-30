import { Component, input } from '@angular/core';
import { Hero } from '../../hero';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperPipePipe } from '../../pipes/upper-pipe.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperPipePipe,FormsModule,CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero:Hero = {id:0, name:''};
  constructor()
  {
    
  }

}
