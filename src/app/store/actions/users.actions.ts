import { createAction, props } from "@ngrx/store";
import { UserModel } from '../../models/user.model';

export const loadUsersAction = createAction('[Users] Load Users');
export const loadUsersSuccessAction = createAction(
  '[Users] Load Users Success',
  props<{ user:UserModel[] }>()  
);
export const loadUsersErrorAction = createAction(
  '[Users] Load Users Error',
  props<{ payload:any }>()  
);
