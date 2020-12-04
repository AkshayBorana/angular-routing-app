import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  editName: string;
  crisis: Crisis;

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch data from route resolver...
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  gotoCrises(): void {
    this.router.navigate(['../', { id: 'crisisId', foo: 'foo' }], {
      relativeTo: this.route
    });
  }

  cancel(): void {
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // If crisis not changed then let user navigate..
    if (!this.crisis || this.crisis.name === this.editName) { return true; }
    // if changed open up a pop-up modal and ask to save/discard chnanges..
    return this.dialogService.confirm('Discard Changes');
  }

  save(): void {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
}
