import { createReducer, on } from "@ngrx/store";
import { incr, decr } from '../actions/count-actions';
const initialState = {
    count: 0
}

export const counterReducer = createReducer(initialState,
    on(incr, (state, data) => ({ ...state, count: state.count + data.num })),
    on(decr, (state, data) => ({ ...state, count: state.count - data.num }))

)