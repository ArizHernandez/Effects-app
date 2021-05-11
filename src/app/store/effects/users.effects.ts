import { Injectable } from "@angular/core";

import { map, mergeMap, catchError } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as usersActions from '../actions/users.actions';
import { UserService } from '../../core/services/user.service';
import { of } from "rxjs";

@Injectable()
export class UsersEffects{

  constructor(
    private action$:Actions,
    private userService:UserService
  ){}

  loadUsers$ = createEffect(
    ():any => this.action$.pipe(
      ofType( usersActions.loadUsersAction ),
      mergeMap(
        () => this.userService.getUsers()
              .pipe(
                map( users => usersActions.loadUsersSuccessAction({ user: users })),
                catchError( err => of(usersActions.loadUsersErrorAction({ payload: err }) ))
              )
      )
    )
  );

}