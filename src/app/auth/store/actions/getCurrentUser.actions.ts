import { createAction, props } from '@ngrx/store';
import { ILoginRequest } from '../../types/loginRequest.interface';
import { ActionTypes } from '../actionTypes';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
