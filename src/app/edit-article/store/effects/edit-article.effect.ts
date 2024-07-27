import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  editArticleAction,
  editArticleFailure,
  editArticleSuccess,
} from '../actions/edit-article.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { EditArticleService } from '../../services/edid-article.service';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EditArticleEffect {
  editArticle$ = createEffect(() =>
    this.action$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: IArticle) => {
            return editArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterEdit$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(editArticleSuccess),
        tap((props) => {
          return this.router.navigate(['/articles', props.article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
