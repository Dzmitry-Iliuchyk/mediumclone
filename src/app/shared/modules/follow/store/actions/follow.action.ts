import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IProfile } from 'src/app/shared/types/profile.interface';

export const followAction = createAction(
  ActionTypes.FOLLOW,
  props<{ isFollowed: boolean; userName: string }>()
);
export const followSuccessAction = createAction(
  ActionTypes.FOLLOW_SUCCESS,
  props<{ profile: IProfile }>()
);
export const followFailureAction = createAction(ActionTypes.FOLLOW_FAILURE);
