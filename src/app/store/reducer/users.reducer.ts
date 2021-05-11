import { Action, createReducer, on } from '@ngrx/store';
import { loadUsersAction, loadUsersErrorAction, loadUsersSuccessAction } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UsersState {
  users: UserModel[],
  loaded: boolean,
  loading: boolean,
  error: any
};

const usersInitialState: UsersState = {
    users  : [],
    loaded : false,
    loading: false,
    error  : null
};

const _userReduccer = createReducer(
  usersInitialState,
  on(loadUsersAction, (state) => ({...state, loading: true }) ),
  on(loadUsersSuccessAction, (state,{ user }) => ({
    ...state, 
    loading: false, 
    loaded: true, 
    error: false,
    users: [...user]
  }) ),
  on(loadUsersErrorAction, (state,{ payload }) => ({
    ...state,
    loading: false, 
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }) ),
);

export function UsersReducer(state: any, action: Action){
  return _userReduccer(state, action);
}