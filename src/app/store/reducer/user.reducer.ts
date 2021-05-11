import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions';
import { UserModel } from '../../models/user.model';

export interface UserState {
  id     : string,
  user   : UserModel,
  loading: boolean,
  loaded : boolean,
  error  : any
};

const userInitialState: UserState = {
  id: '1',
  user: { id: '1', first_name: '', last_name: '', email: '', avatar: ''},
  loading: false,
  loaded: false,
  error: null
};

const _userReducer = createReducer(
  userInitialState,
  on(userActions.loadUserAction, (state, { id }) => ({
    ...state,
    loading: true,
    id: id
  })),
  on(userActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    loaded: true
  })),
  on(userActions.loadUserError, (state, { error }) => ({
    ...state,
    loadeing: false,
    loaded: true,
    error
  }))
);

export function userReducer(state:any, action:Action){
  return _userReducer(state, action)
}