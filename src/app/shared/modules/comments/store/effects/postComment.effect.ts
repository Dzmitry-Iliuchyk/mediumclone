import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  postCommentAction,
  postCommentFailureAction,
  postCommentSuccessAction,
} from '../actions/postComment.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { ICommentFromBackResponse } from 'src/app/shared/types/ICommentFromBack.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PostCommentEffect {
  postCommentEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(postCommentAction),
      switchMap(({ slug, body }) => {
        return this.commentsService.postComment(body, slug).pipe(
          map((response: ICommentFromBackResponse) => {
            
            return postCommentSuccessAction({ comments: response });
          }),
          catchError((resp: HttpErrorResponse) => {
            return of(postCommentFailureAction({ errors: resp.error.errors }));
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
