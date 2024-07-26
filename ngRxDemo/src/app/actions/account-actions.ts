import { createAction, props } from "@ngrx/store";

// Register Action
export const register = createAction('Register', props<{ user: any }>());
export const registerSuccess = createAction('RegisterSuccess', props<{ user: any }>());
export const registerFailure = createAction('RegisterFailure', props<{ error: any }>());

// Login Action
export const login = createAction('Login', props<{ user: any }>());
export const loginSuccess = createAction('LoginSuccess', props<{ user: any }>());
export const loginFailure = createAction('LoginFailure', props<{ error: any }>());

// Logout Action
export const logout = createAction('Logout', props<{ email: string }>());
export const logoutSuccess = createAction('LogoutSuccess', props<{ user: any }>());
export const logoutFailure = createAction('LogoutFailure', props<{ error: any }>());


