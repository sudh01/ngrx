import { createAction, props } from "@ngrx/store";

export const incr = createAction('incr', props<({ num: number })>());
export const decr = createAction('decr', props<{ num: number }>());