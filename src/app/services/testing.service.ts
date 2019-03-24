import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { TestingState } from '../store/testing.reducer';
import { AppStoreService } from '../app.store.service';
import { map } from 'rxjs/operators';
import { TestingUpdated } from '../store/testing.actions';



// @Injectable({
//   providedIn: 'root'
// })

const selectTesting = createFeatureSelector<TestingState>('testing');
const selectTestingName = createSelector(selectTesting, (state: TestingState) => state.name);

// 1 createSelector()
// createSelector<State, S1, Result>
// (s1: Selector<State, S1>, 
// projector: (s1: S1) => Result)
// : MemoizedSelector<State, Result>;

// 2  createFeatureSelector
// createFeatureSelector<T>
// (featureName: string
//   : MemoizedSelector<object, T>;

@Injectable()
export class TestingService {

  constructor(private store: Store<AppState>) { }

  public getTestingName(): Observable<string> {
    return this.store.pipe(select(selectTestingName));

  }

  public updateTestingName(payload: string) {

    this.store.dispatch(new TestingUpdated(payload));
  }

}
