import { createReducer, on } from '@ngrx/store';
import { ITagState } from '../types/tag-state.interface';
import {
  getTagsAction,
  getTagsFailureAction,
  getTagsSuccessAction,
} from './actions/get-tags.actions';

const initialState: ITagState = {
  tags: null,
  isLoading: false,
  error: null,
};

export const tagReducer = createReducer(
  initialState,
  on(getTagsAction, (state): ITagState => ({ ...state, isLoading: true })),
  on(
    getTagsSuccessAction,
    (state, action): ITagState => ({
      ...state,
      isLoading: false,
      tags: action.tags,
    })
  ),
  on(
    getTagsFailureAction,
    (state, action): ITagState => ({
      ...state,
      isLoading: false,
      tags: null,
      error: action.error
    })
  )
);
