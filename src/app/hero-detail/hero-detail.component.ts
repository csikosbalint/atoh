import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  public hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location ) {
      console.log(this.heroService);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    console.log(this.hero);
  }

}
