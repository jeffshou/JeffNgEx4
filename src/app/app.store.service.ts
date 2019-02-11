import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './reducers';

@Injectable()
export class AppStoreService {
  constructor(private store: Store<AppState>) {}

  public getAppState(): Observable<AppState> {
    return this.store.pipe(select(state => state));
  }
}
