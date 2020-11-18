import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
   hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeroService
  ) {}

  ngOnInit(): void {
      this.hero = this.route.paramMap.pipe(
        switchMap((params: Params) =>
          this.service.getHeroes(params.get('id'))
        )
      )
  }

  goBackToHeroes(hero: Hero): void {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['heroes', { id: heroId, foo: 'bar' }]);
  }
}
