import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const ADMIN_ID = 'admin';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor() { }

  getAdminId(): Observable<string> {

    return of(ADMIN_ID);
  }
}
