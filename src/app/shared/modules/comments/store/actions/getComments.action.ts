import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../ActionTypes';
import { ICommentsResponse } from 'src/app/shared/types/IComment.interface';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

export const getCommentsAction = createAction(
  ActionTypes.GET_COMMENTS,
  props<{ slug: string }>()
);

export const getCommentsSuccessAction = createAction(
  ActionTypes.GET_COMMENTS_SUCCESS,
  props<{ comments: ICommentsResponse }>()
);

export const getCommentsFailureAction = createAction(
  ActionTypes.GET_COMMENTS_FAILURE
);
