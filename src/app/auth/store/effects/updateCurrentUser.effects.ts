import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "../actions/updateCurrentUser.action";
import { ICurrentUserInput } from "src/app/shared/types/ICurrentUserInput.interface";
import { AuthService } from "../../services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class updateCurrentUserEffect {
  updateCurrentUserEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ request }) => {
        return this.authService.updateCurrentUser(request).pipe(
          map((currentUser: ICurrentUserInput) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
  ) {}
}
