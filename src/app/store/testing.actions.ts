import { Action } from '@ngrx/store';




  export enum TestingActionTypes {
    TestingUpdated = '[Testing] Updated',
  }

  export class TestingUpdated implements Action {
    public readonly type = TestingActionTypes.TestingUpdated;
    constructor(public payload: string) {}
  }

  export type TestingActions = TestingUpdated;
