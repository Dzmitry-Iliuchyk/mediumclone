import { createReducer, on } from '@ngrx/store';

import { routerNavigationAction } from '@ngrx/router-store';
import { IArticleState } from '../types/IArticleState.interface';
import { getArticleAction, getArticleSuccessAction,getArticleFailureAction } from './actions/getArticle.action';

const initialState: IArticleState = {
  isLoading: false,
  error: null,
  data: null,
};

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): IArticleState => ({ ...state, isLoading: true })
  ),
  on(
    getArticleSuccessAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IArticleState => initialState)
);
