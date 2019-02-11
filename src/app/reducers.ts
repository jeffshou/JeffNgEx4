import { testingReducer, TestingState } from './store/testing.reducer';
import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeLogger } from 'ngrx-store-logger';


export interface AppState {
  testing: TestingState;
  }
  

  export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger()(reducer);
  }

export const reducers: ActionReducerMap<AppState> = {
  testing: testingReducer,
  };
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];