import { createAction, props } from "@ngrx/store";

// edit-name - type of action
// props     - payload

// Without createAction() method:
// export const editName = (name) => {
//     return {
//         type: 'edit-name',
//         payload: name
//     }
// }
export const getUsers = createAction('getUsers', props<{ users: any[] }>());
export const register = createAction('register', props<{ user: any }>());


export const editName = createAction('edit-name', props<{ name: string }>());
export const editEmail = createAction('edit-email', props<{ email: string }>());
