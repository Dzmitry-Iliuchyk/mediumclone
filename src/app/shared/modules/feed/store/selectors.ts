import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IFeedState } from '../types/feedState.interface';

export const feedFutureSelector = (state: IAppState) => state.feed;

export const feedDataSelector = createSelector(
  feedFutureSelector,
  (feedState: IFeedState) => feedState.data
);
export const isLoadingSelector = createSelector(
  feedFutureSelector,
  (feedState: IFeedState) => feedState.isLoading
);
export const errorSelector = createSelector(
  feedFutureSelector,
  (feedState: IFeedState) => feedState.error
);
