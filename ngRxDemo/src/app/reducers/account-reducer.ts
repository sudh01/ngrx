import { createReducer, on } from "@ngrx/store";
import {
    logoutSuccess,
    logoutFailure,
    loginSuccess,
    loginFailure,
    registerFailure,
    registerSuccess
} from "../actions/account-actions";

const initialState = {
    regUser: {},
    loginUser: {},
    error: null
}

export const accountReducer = createReducer(initialState,
    on(registerSuccess, (state, { user }) => {
        return { ...state, regUser: user, error: null };
    }),
    on(registerFailure, (state, { error }) => {
        return { ...state, regUser: {}, error: error };
    }),
    on(loginSuccess, (state, { user }) => {
        return { ...state, loginUser: user, error: null };
    }),
    on(loginFailure, (state, { error }) => {
        return { ...state, loginUser: {}, error: error };
    }),
    on(logoutSuccess, (state, { user }) => {
        return { ...state, loginUser: user, error: null };
    }),
    on(logoutFailure, (state, { error }) => {
        return { ...state, loginUser: {}, error: error };
    }),

)