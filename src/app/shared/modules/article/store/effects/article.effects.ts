import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, of } from 'rxjs';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action';
import { IArticle } from 'src/app/shared/types/article.interface';
import { ArticleService } from 'src/app/shared/services/article.service';

@Injectable()
export class ArticleEffect {
  article$ = createEffect(() =>
    this.action$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError((err) => {
            console.log('error', err);
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
  constructor(
    private action$: Actions,
    private articleService: ArticleService
  ) {}
}
