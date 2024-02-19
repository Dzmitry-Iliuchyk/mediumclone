import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, using } from 'rxjs';
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { IFeedResponse } from 'src/app/shared/modules/feed/types/feedResponse.interface';
import {
  errorSelector,
  isLoadingSelector,
  feedDataSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import queryString from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feedData$: Observable<IFeedResponse | null>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscribtion: Subscription;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.queryParamsSubscribtion.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  private fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }

  initializeListeners() {
    this.queryParamsSubscribtion = this.route.queryParams.subscribe(
      (params: Params) => {
        console.log(params);
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();
      }
    );
  }
  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feedData$ = this.store.pipe(select(feedDataSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }
}
