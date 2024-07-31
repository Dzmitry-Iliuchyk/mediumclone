import { IAppState } from 'src/app/shared/types/appState.interface';
import { IUserProfileState } from '../types/IUserProfileState.interface';
import { createSelector } from '@ngrx/store';

export const getUserProfileFeatureSelector = (
  state: IAppState
): IUserProfileState => state.userProfile;

export const isLoadingSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile: IUserProfileState) => userProfile.isLoading
);
export const profileSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile: IUserProfileState) => userProfile.data
);
export const errorSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile: IUserProfileState) => userProfile.error
);
