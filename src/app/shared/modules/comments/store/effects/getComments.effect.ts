import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCommentsAction,
  getCommentsFailureAction,
  getCommentsSuccessAction,
} from '../actions/getComments.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { ICommentsResponse } from 'src/app/shared/types/IComment.interface';

@Injectable()
export class GetCommentsEffect {
  getCommentsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCommentsAction),
      switchMap(({ slug }) => {
        return this.commentsService.getCommentsToArticle(slug).pipe(
          map((response: ICommentsResponse) => {
            return getCommentsSuccessAction({ comments: response });
          }),
          catchError(() => {
            return of(getCommentsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private commentsService: CommentsService
  ) {}
}
