import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(msg?: string): Observable<boolean> {
    const confirmation = window.confirm(msg || 'Is it okay ?');
    return of(confirmation);
  }
}
