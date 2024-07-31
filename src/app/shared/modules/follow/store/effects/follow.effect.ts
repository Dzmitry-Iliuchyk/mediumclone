import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  followAction,
  followFailureAction,
  followSuccessAction,
} from '../actions/follow.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { FollowService } from '../../services/follow.service';
import { IProfile } from 'src/app/shared/types/profile.interface';

@Injectable()
export class FollowEffect {
  follow$ = createEffect(() =>
    this.action$.pipe(
      ofType(followAction),
      switchMap(({ isFollowed, userName }) => {
        const profile$ = isFollowed
          ? this.followService.unfollowArticle(userName)
          : this.followService.followArticle(userName);
        return profile$.pipe(
          map((profile: IProfile) => {
            return followSuccessAction({ profile });
          }),
          catchError(() => {
            return of(followFailureAction());
          })
        );
      })
    )
  );
  constructor(private action$: Actions, private followService: FollowService) {}
}
