import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { mergeMap } from "rxjs";

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService
    ) { }

    // Actions - is a service & Observable(emits data)
    // megeMap = is used to make API Call

    // fetchUsers$ = createEffect(() => {
    //     this.action$.pipe(
    //         ofType(getUsers),
    //         mergeMap(() => {
    //             this.userService.getUsers().pipe(
    //                 map((users) =>)
    //             )
    //         })
    //     )
    // })
}