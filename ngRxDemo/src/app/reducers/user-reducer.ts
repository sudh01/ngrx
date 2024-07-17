import { createReducer, on } from "@ngrx/store";
import { setUsers } from '../actions/user-actions';
// Initial state
const initialState = {
    users: []
}


export const userReducer = createReducer(initialState,
    on(setUsers, (state, { users }) => {
        return { ...state, users: users };
    })
);