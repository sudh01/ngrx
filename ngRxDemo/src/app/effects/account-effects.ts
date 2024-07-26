import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { AccountService } from "../services/account.service";
import { logout, logoutSuccess, logoutFailure, login, loginSuccess, loginFailure, register, registerFailure, registerSuccess } from "../actions/account-actions";
import { switchMap, mergeMap, map, tap, catchError, of } from "rxjs";

@Injectable()
export class AccountEffects {

    constructor(
        private actions$: Actions,
        private accountService: AccountService,
    ) { }

    regUser = createEffect(
        () =>
            this.actions$.pipe(
                ofType(register),
                mergeMap(
                    (actions) =>
                        this.accountService.register(actions.user).pipe(
                            tap(data => console.log("effect: " + JSON.stringify(data))),
                            map((data) =>
                                registerSuccess({
                                    user: data
                                })
                            ),
                            catchError(error => of(registerFailure({ error })))
                        )
                )
            )
    );

    loginUser = createEffect(
        () =>
            this.actions$.pipe(
                ofType(login),
                mergeMap(
                    (actions) =>
                        this.accountService.login(actions.user).pipe(
                            tap(data => console.log("effect: " + JSON.stringify(data))),
                            map((data) =>
                                loginSuccess({
                                    user: data
                                })
                            ),
                            catchError(error => of(loginFailure({ error })))
                        )
                )
            )
    );

    logoutUser = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logout),
                mergeMap(
                    (actions) =>
                        this.accountService.logout(actions.email).pipe(
                            tap(data => console.log("effect: " + JSON.stringify(data))),
                            map((data) =>
                                logoutSuccess({
                                    user: data
                                })
                            ),
                            catchError(error => of(logoutFailure({ error })))
                        )
                )
            )
    );
}