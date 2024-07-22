import { createReducer, on } from "@ngrx/store";
import { addUserSuccess, addUserFailure, deleteUserById, setUserById, setUsers, deleteUserByIdSuccess, updateUserSuccess } from '../actions/user-actions';
// Initial state
const initialState = {
    users: [],
    user: {}
}

export const userReducer = createReducer(initialState,
    on(setUsers, (state, { users }) => {
        return { ...state, users: users };
    }),
    on(setUserById, (state, { user }) => {
        console.log("service: " + user);
        return {
            ...state,
            user: user
        }
    }),
    on(deleteUserByIdSuccess, (state, { user }) => {
        return { ...state, users: state.users.filter(u => u.empId != user.empId) }
    }),
    on(addUserSuccess, (state, { user }) => {
        return { ...state, users: [...state.users, user] }
    }),
    on(updateUserSuccess, (state, { user }) => {
        return { ...state, users: state.users.map(u => u.empId == user.empId ? user : u) }
    }),

);