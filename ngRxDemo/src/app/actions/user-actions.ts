import { createAction, props } from "@ngrx/store";


// setUsers - type of action
// props - payload
// Get all users
export const setUsers = createAction('setUsers', props<{ users: any }>());
export const getUsers = createAction('get-users');


// Delete user by id
export const deleteUserById = createAction('deleteUserById', props<{ id: number }>());
export const deleteUserByIdSuccess = createAction('deleteUserByIdSuccess', props<{ user: any }>());
export const deleteUserByIdFailure = createAction('deleteUserByIdFailure', props<{ error: any }>());

// update user
export const updateUser = createAction('updateUser', props<{ user: any }>());
export const updateUserSuccess = createAction('updateUserSuccess', props<{ user: any }>());
export const updateUserFailure = createAction('updateUserFailure', props<{ error: any }>());

// Get user by id action
export const getUserById = createAction('getUserById', props<{ id: number }>());
export const setUserById = createAction('setUserById', props<{ user: any }>());

// Add User
export const addUser = createAction('addUser', props<{ user: any }>());
export const addUserSuccess = createAction('addUserSuccess', props<{ user: any }>());
export const addUserFailure = createAction('addUserFailure', props<{ error: any }>());