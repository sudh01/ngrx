import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { switchMap, mergeMap, map, tap, catchError, of } from "rxjs";
import { updateUser, updateUserSuccess, addUser, addUserFailure, deleteUserByIdSuccess, deleteUserById, getUsers, setUsers, getUserById, setUserById, addUserSuccess } from '../actions/user-actions';

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService
    ) { }

    // Actions - is a service & Observable(emits data)
    // megeMap = is used to make API Call

    fetchUsers = createEffect(
        () =>
            this.action$.pipe(
                ofType(getUsers),
                mergeMap(
                    () =>
                        this.userService.getUsers().pipe(
                            map((data) => setUsers({ users: data })),

                        )
                )
            )
    )
    getUserById = createEffect(() =>
        this.action$.pipe(
            ofType(getUserById),
            mergeMap((action) =>
                this.userService.getUserById(action.id).pipe(
                    tap(user => console.log("effect: " + JSON.stringify(user))),
                    map((user) => {
                        const userString = JSON.stringify(user);
                        return setUserById({ user: userString })
                    })
                )
            )
        ));

    // ADD
    addUser = createEffect(
        () =>
            this.action$.pipe(
                ofType(addUser),
                mergeMap(
                    (action) =>
                        this.userService.addUser(action.user).pipe(
                            tap(data => console.log("effect: " + JSON.stringify(data))),
                            map((data) =>
                                addUserSuccess({
                                    user: JSON.stringify(data)

                                })
                            ),
                            catchError(error => of(addUserFailure({ error })))
                        )
                )
            )
    )

    // UPDATE
    updateUser = createEffect(
        () =>
            this.action$.pipe(
                ofType(updateUser),
                mergeMap(
                    (action) =>
                        this.userService.updateUser(action.user).pipe(
                            tap(data => console.log("effect: " + JSON.stringify(data))),
                            map((data) =>
                                updateUserSuccess({
                                    user: JSON.stringify(data)

                                })
                            ),
                            catchError(error => of(addUserFailure({ error })))
                        )
                )));

    deleteUserById$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteUserById),
            switchMap(action =>
                this.userService.deleteUserById(action.id).pipe(
                    map((data) => deleteUserByIdSuccess({ user: data }),
                    )))));
}