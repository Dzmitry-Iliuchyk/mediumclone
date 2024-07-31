import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ICommentsState } from '../types/ICommentsState.interface';

export const commentsFeatureSelector = (state: IAppState) => state.comments;

export const commentsSelector = createSelector(
  commentsFeatureSelector,
  (commentState: ICommentsState) => commentState.comments
);
export const isLoadingCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentState: ICommentsState) => commentState.isLoading
);
export const isSubmittingCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentState: ICommentsState) => commentState.isSubmitting
);
export const errorCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentState: ICommentsState) => commentState.error
);
