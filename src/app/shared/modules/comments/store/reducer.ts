import { createReducer, on } from '@ngrx/store';
import { ICommentsState } from '../types/ICommentsState.interface';
import {
  getCommentsAction,
  getCommentsFailureAction,
  getCommentsSuccessAction,
} from './actions/getComments.action';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  postCommentAction,
  postCommentFailureAction,
  postCommentSuccessAction,
} from './actions/postComment.action';

const initialState: ICommentsState = {
  isLoading: false,
  isSubmitting: false,
  error: null,
  comments: null,
};
export const commentsReducer = createReducer(
  initialState,
  on(
    getCommentsAction,
    (state): ICommentsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCommentsSuccessAction,
    (state, action): ICommentsState => ({
      ...state,
      isLoading: false,
      comments: action.comments.comments,
    })
  ),
  on(
    getCommentsFailureAction,
    (state, action): ICommentsState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    postCommentAction,
    (state): ICommentsState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    postCommentSuccessAction,
    (state, action): ICommentsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    postCommentFailureAction,
    (state, action): ICommentsState => ({
      ...state,
      isSubmitting: false,
      error: action.errors,
    })
  ),
  on(routerNavigationAction, (): ICommentsState => initialState)
);
