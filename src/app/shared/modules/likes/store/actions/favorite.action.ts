import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IFeedResponse } from '../../../feed/types/feedResponse.interface';
import { IArticle } from 'src/app/shared/types/article.interface';

export const favoriteAction = createAction(
  ActionTypes.FAVORITE,
  props<{ isFavorited: boolean; slug: string }>()
);
export const favoriteSuccessAction = createAction(
  ActionTypes.FAVORITE_SUCCESS,
  props<{ article: IArticle }>()
);
export const favoriteFailureAction = createAction(ActionTypes.FAVORITE_FAILURE);
