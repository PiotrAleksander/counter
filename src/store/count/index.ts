import { createAction, createReducer, on } from '@ngrx/store';

const COUNT_BRANCH = 'COUNT_BRANCH';
export const incrementCount = createAction(`${COUNT_BRANCH} INCREMENT`);
export const decrementCount = createAction(`${COUNT_BRANCH} DECREMENT`);
export const resetCount = createAction(`${COUNT_BRANCH} RESET`);

const initialCountState: number = 0;

const countReducer = createReducer(
  initialCountState,
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1),
  on(resetCount, (_state) => 0)
);

export default (state, action) => countReducer(state, action);
