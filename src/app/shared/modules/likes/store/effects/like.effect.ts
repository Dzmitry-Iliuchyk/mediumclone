import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  favoriteAction,
  favoriteFailureAction,
  favoriteSuccessAction,
} from '../actions/favorite.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { LikeService } from '../../services/like.service';
import { IArticle } from 'src/app/shared/types/article.interface';

@Injectable()
export class LikeEffect {
  like$ = createEffect(() =>
    this.action$.pipe(
      ofType(favoriteAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.likeService.unfavoriteArticle(slug)
          : this.likeService.favoriteArticle(slug);
        return article$.pipe(
          map((article: IArticle) => {
            return favoriteSuccessAction({ article });
          }),
          catchError(() => {
            return of(favoriteFailureAction());
          })
        );
      })
    )
  );
  constructor(private action$: Actions, private likeService: LikeService) {}
}
