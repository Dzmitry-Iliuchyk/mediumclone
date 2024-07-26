import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/getCurrentUser.actions';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LocalStorageEnum } from 'src/app/shared/enums/localStorage.enum';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUserAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        console.log('getUserEffect')
        if(!this.persistance.get(LocalStorageEnum.accessToken.toString())){
          
            return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(private action$: Actions, private authService: AuthService, private persistance: PersistenceService) {}
}
