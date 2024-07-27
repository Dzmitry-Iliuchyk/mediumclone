import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../types/actionTypes';
import { IArticle } from 'src/app/shared/types/article.interface';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailure = createAction(ActionTypes.GET_ARTICLE_FAILURE);
