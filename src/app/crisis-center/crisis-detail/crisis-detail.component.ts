import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  gotoCrises(): void {
    this.router.navigate(['../', { id: 'crisisId', foo: 'foo' }], {
      relativeTo: this.route
    });
  }

  cancel(): void {
    this.gotoCrises();
  }

  save(): void {
    // this.crisis.name = this.editName;
    this.gotoCrises();
  }
}
