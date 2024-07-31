import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProfileService } from "../../service/profile.service";
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "../actions/getUserProfile.action";
import { catchError, map, of, switchMap } from "rxjs";
import { IProfile } from "src/app/shared/types/profile.interface";

@Injectable()
export class GetUserProfileEffect {
  getUserProfileEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.profileService.getUserProfile(slug).pipe(
          map((profile: IProfile) => {
            return getUserProfileSuccessAction({userProfile: profile });
          }),
          catchError(() => {
            return of(getUserProfileFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private profileService: ProfileService
  ) {}
}
