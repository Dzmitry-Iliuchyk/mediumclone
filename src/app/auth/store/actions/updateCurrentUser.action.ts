import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { ICurrentUserInput } from "src/app/shared/types/ICurrentUserInput.interface";
import { ICurrentUser } from "src/app/shared/types/currentUser.interface";
import { IBackEndErrors } from "src/app/shared/types/backEndErrors.interface";

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ request: ICurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
