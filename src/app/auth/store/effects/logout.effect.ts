import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logOutAction } from '../actions/sync.action';
import { tap } from 'rxjs';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LocalStorageEnum } from 'src/app/shared/enums/localStorage.enum';
import { Route, Router } from '@angular/router';

@Injectable()
export class LogOutEffect {
  logOutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOutAction),
        tap(() => {
          this.persistanceService.set(
            LocalStorageEnum.accessToken.toString(),
            ''
          );
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private persistanceService: PersistenceService,
    private router: Router
  ) {}
}
