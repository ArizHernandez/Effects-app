import { Injectable } from "@angular/core";

import { UserService } from '../../core/services/user.service';

import { mergeMap, map, catchError } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions';
import { of } from 'rxjs';


@Injectable()
export class UserEffects{

  constructor(
    private actions$:Actions,
    private userService:UserService
  ){}

  loadUser$ = createEffect( () => this.actions$.pipe(
    ofType(userActions.loadUserAction),
    mergeMap( ({ id }) => this.userService.getUser(id).pipe(
      map( user => userActions.loadUserSuccess({ user })),
      catchError( error => of(userActions.loadUserError({ error })))  
      ))
    )
  )
}