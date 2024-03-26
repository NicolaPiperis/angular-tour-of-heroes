import { Component } from '@angular/core';
import { Hero } from '../interface/hero'
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero : undefined | Hero 
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    console.log(this.selectedHero)
  }
}
