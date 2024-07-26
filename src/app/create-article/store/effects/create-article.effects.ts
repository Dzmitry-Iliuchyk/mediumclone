import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createArticleAction,
  createArticleFailure,
  createArticleSuccess,
} from '../actions/create-articles.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CreateArticleService } from '../../services/create-article.service';
import { IArticle } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.action$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            return createArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(createArticleSuccess),
        tap((props) => {
          return this.router.navigate(['/articles', props.article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
