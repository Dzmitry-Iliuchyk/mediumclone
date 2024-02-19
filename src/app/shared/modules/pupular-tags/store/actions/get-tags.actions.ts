import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../ActionTypes';
import { ITagResponse } from '../../types/tagsResponce.interface';

export const getTagsAction = createAction(ActionTypes.GET_TAGS);

export const getTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ tags: ITagResponse }>()
);
export const getTagsFailureAction = createAction(ActionTypes.GET_TAGS_FAILURE,props<{ error: string }>());
