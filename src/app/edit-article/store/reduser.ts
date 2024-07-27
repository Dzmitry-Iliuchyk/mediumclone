import { createReducer, on } from '@ngrx/store';
import {
  editArticleAction,
  editArticleFailure,
  editArticleSuccess,
} from './actions/edit-article.action';
import { IEditArticleState } from '../types/IEditArticle.interface';
import {
  getArticleAction,
  getArticleFailure,
  getArticleSuccess,
} from './actions/get-article.action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: IEditArticleState = {
  isSubmitting: false,
  isLoading: false,
  article: null,
  validationErrors: null,
};

export const editArticleReducer = createReducer(
  initialState,
  on(
    editArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    editArticleSuccess,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
    })
  ),
  on(
    editArticleFailure,
    (state, action): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccess,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailure,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IEditArticleState => initialState)
);
