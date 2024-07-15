import { createReducer, on } from "@ngrx/store";
import { editName, editEmail, register } from "../actions/user-actions";

// Initial state
const initialState = {
    user: {
        name: '',
        email: '',
        constactNo: '',
        password: ''
    },
    users: []
}


export const userReducer = createReducer(initialState,
    // on(register, (state, data) => ({ ...state, user: data })),
    on(editName, (state, data) => ({ ...state, name: data.name })),
    on(editEmail, (state, data) => ({ ...state, name: data.email })),
)