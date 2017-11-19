import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public selectedHero: Hero;
  
  public heroes: Hero[];

  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    console.log(this.heroService);
    console.log(this.heroes);
    this.heroService.getHeroes().subscribe( data => {
      this.heroes = data;
    })
    console.log(this.heroes);
  }

  
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
