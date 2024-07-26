import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IArticleState } from '../types/IArticleState.interface';

export const articleFeatureSelector = (state: IAppState) => state.article;

export const articleDataSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.data
);
export const isLoadingArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.isLoading
);
export const errorArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.error
);
