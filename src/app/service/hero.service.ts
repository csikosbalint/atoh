import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    console.log("Sending GET to: api/heroes");
    
    return this.http.get<Hero[]>('https://dpvaua2j59.execute-api.eu-west-1.amazonaws.com/v1/pets');
  }
  
}
