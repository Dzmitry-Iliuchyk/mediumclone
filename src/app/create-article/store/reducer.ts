import { createReducer, on } from '@ngrx/store';
import { ICreateArticleState } from './types/ICreateArticleState.interface';
import {
  createArticleAction,
  createArticleFailure,
  createArticleSuccess,
} from './actions/create-articles.actions';

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
};

export const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    createArticleSuccess,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
    })
  ),
  on(
    createArticleFailure,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);
