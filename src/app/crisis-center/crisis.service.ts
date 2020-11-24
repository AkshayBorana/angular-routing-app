import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Crisis[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(CRISES);
  }

  getHero(id: number | string): Observable<Crisis> {
    return this.getHeroes().pipe(
      map((heroes: Crisis[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
