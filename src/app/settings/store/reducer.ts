import { createReducer, on } from '@ngrx/store';
import { ISettingsState } from '../types/ISettingsState.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action';

const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null,
};

export const createSettingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateCurrentUserFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(updateCurrentUserSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  }))
);
