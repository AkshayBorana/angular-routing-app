import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  static nextCrisisId = 100;
  private crisis$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor() {}

  // List of all Crises...
  getCrises(): Observable<Crisis[]> {
    return this.crisis$;
  }

  // Only one Crisis...
  getCrisis(id: number | string): Observable<Crisis> {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}
