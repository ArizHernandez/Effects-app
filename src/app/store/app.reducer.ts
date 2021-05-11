import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducer';

export interface AppState{
  users: reducers.UsersState,
  user: reducers.UserState
}

export const appReducer: ActionReducerMap<AppState> = {
  users: reducers.UsersReducer,
  user: reducers.userReducer
}