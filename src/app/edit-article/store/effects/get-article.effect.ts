import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { IArticle } from 'src/app/shared/types/article.interface';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { getArticleAction, getArticleFailure, getArticleSuccess } from '../actions/get-article.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.action$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(getArticleFailure());
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private articleService: SharedArticleService
  ) {}
}
