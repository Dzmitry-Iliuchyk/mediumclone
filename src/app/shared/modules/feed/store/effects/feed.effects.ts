import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError, of } from 'rxjs';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { IFeedResponse } from 'src/app/shared/modules/feed/types/feedResponse.interface';

@Injectable()
export class FeedEffect {
  feed$ = createEffect(() =>
    this.action$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: IFeedResponse) => {
        
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );
  constructor(private action$: Actions, private feedService: FeedService) {}
}
