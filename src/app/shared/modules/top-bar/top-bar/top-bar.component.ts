import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import {
  CurrentUserSelector,
  IsAnonymousSelector,
  IsLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(IsAnonymousSelector));
    this.currentUser$ = this.store.pipe(
      select(CurrentUserSelector),
      tap(console.log)
    );
  }
}
