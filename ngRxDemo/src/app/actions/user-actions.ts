import { createAction, props } from "@ngrx/store";


// setUsers - type of action
// props - payload

export const setUsers = createAction('setUsers', props<{ users: any }>());
export const getUsers = createAction('get-users');
