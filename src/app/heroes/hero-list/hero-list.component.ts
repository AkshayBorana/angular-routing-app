import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  selectedHero: number;

  heroes$: Observable<Hero[]>;

  constructor(
    private service: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getHeroes();

    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedHero = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => (this.heroes$ = heroes));
  // }
}
