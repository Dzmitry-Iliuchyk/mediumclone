import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ITagState } from '../types/tag-state.interface';

export const TagFutureSelector = (state: IAppState) => state.tags;

export const TagSelector = createSelector(
  TagFutureSelector,
  (tagState: ITagState) => tagState.tags
);
export const isLoadingSelector = createSelector(
  TagFutureSelector,
  (tagState: ITagState) => tagState.isLoading
);
export const errorSelector = createSelector(
  TagFutureSelector,
  (tagState: ITagState) => tagState.error
);
