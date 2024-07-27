import { createSelector } from '@ngrx/store';
import { IEditArticleState } from '../types/IEditArticle.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';

export const editArticleFeatureSelector = (
  state: IAppState
): IEditArticleState => state.editArticle;

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (createState: IEditArticleState) => createState.isSubmitting
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (createState: IEditArticleState) => createState.isLoading
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (createState: IEditArticleState) => createState.validationErrors
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (createState: IEditArticleState) => createState.article
);
