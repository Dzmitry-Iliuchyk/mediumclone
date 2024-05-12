import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IArticleState } from '../types/IArticleState.interface';

export const articleFutureSelector = (state: IAppState) => state.article;

export const articleDataSelector = createSelector(
  articleFutureSelector,
  (articleState: IArticleState) => articleState.data
);
export const isLoadingArticleSelector = createSelector(
  articleFutureSelector,
  (articleState: IArticleState) => articleState.isLoading
);
export const errorArticleSelector = createSelector(
  articleFutureSelector,
  (articleState: IArticleState) => articleState.error
);
