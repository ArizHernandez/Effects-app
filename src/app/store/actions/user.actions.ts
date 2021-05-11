import { createAction, props } from "@ngrx/store";
import { UserModel } from '../../models/user.model';

export const loadUserAction = createAction(
  '[User Action] load User',
  props<{ id:string }>()
);

export const loadUserSuccess = createAction(
  '[User Action] load User Success',
  props<{ user:UserModel }>()
) 

export const loadUserError = createAction(
  '[User Action] load User Error',
  props<{ error:any }>()
)