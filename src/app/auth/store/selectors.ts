import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IAuthState } from '../types/authState.interface';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const BackendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
);

export const IsLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
);

export const IsAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
);

export const CurrentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
);
