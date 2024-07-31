import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../ActionTypes';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { ICommentFromBackResponse } from 'src/app/shared/types/ICommentFromBack.interface';

export const postCommentAction = createAction(
  ActionTypes.POST_COMMENT,
  props<{ slug: string; body: string }>()
);

export const postCommentSuccessAction = createAction(
  ActionTypes.POST_COMMENT_SUCCESS,
  props<{ comments: ICommentFromBackResponse }>()
);

export const postCommentFailureAction = createAction(
  ActionTypes.POST_COMMENT_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
