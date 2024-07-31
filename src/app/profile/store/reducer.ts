import { createReducer, on } from '@ngrx/store';
import { IUserProfileState } from '../types/IUserProfileState.interface';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.action';

const initialState: IUserProfileState = {
  isLoading: false,
  data: null,
  error: null,
};

export const getUserProfilrReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )

  // on(routerNavigationAction, (): IUserProfileState => initialState)
);
