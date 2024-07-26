import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ICreateArticleState } from './types/ICreateArticleState.interface';

export const createArticleFeatureSelector = (
  state: IAppState
): ICreateArticleState => state.createArticle;

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createState: ICreateArticleState) => createState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createState: ICreateArticleState) => createState.validationErrors
);
