import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LocalStorageEnum } from 'src/app/shared/enums/localStorage.enum';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set(
              LocalStorageEnum.accessToken.toString(),
              currentUser.token
            );
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        console.log('Success submit effect');
        this.router.navigateByUrl('/');
      })
    ),{dispatch: false}
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private persistanceService: PersistenceService,
    private router: Router
  ) {}
}
