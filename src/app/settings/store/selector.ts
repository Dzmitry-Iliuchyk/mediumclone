import { IAppState } from "src/app/shared/types/appState.interface";
import { ISettingsState } from "../types/ISettingsState.interface";
import { createSelector } from "@ngrx/store";

export const settingsFeatureSelector = (state: IAppState): ISettingsState =>
  state.settings;

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.validationErrors
);
