import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../types/actionTypes";
import { IArticle } from "src/app/shared/types/article.interface";
import { IArticleInput } from "src/app/shared/types/IArticleInput.interface";
import { IBackEndErrors } from "src/app/shared/types/backEndErrors.interface";

export const editArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
);

export const editArticleSuccess = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const editArticleFailure = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: IBackEndErrors }>()
);

