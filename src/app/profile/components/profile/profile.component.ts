import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { IProfile } from 'src/app/shared/types/profile.interface';
import { getUserProfileAction } from '../../store/actions/getUserProfile.action';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  errorSelector,
  isLoadingSelector,
  profileSelector,
} from '../../store/selector';
import { CurrentUserSelector } from 'src/app/auth/store/selectors';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  userProfile: IProfile;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  slug: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  fetchData() {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(CurrentUserSelector), filter(Boolean)),
      this.store.pipe(select(profileSelector), filter(Boolean)),
    ]).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IProfile]) => {
        return currentUser.username === userProfile.username;
      })
    );
  }
  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(profileSelector))
      .subscribe((userProfile: IProfile) => {
        this.userProfile = userProfile;
      });
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchData();
    });
  }
  getApiUrl(): string {
    const isFavorites = this.router.url.includes('/favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
}
