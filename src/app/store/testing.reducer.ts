import * as testingActions from './testing.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface TestingState {
    name:    string;
}

export const initialTestingState: TestingState = {
    name : '',
};


export function testingReducer(
    state: TestingState= initialTestingState,
    action: testingActions.TestingActions): TestingState {
        switch (action.type) {
            case testingActions.TestingActionTypes.TestingUpdated:
                return { name: action.payload };
            default:
                return state;
        }
}
