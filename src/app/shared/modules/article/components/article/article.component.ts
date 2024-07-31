import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  articleDataSelector,
  errorArticleSelector,
  isLoadingArticleSelector,
} from 'src/app/shared/modules/article/store/selectors';
import { IArticle } from 'src/app/shared/types/article.interface';
import { getArticleAction } from 'src/app/shared/modules/article/store/actions/getArticle.action';
import { CurrentUserSelector } from 'src/app/auth/store/selectors';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { deleteArticleAction } from '../../store/actions/deleteArticle.actions';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string = '';
  article: IArticle | null;
  articleSubscription: Subscription;
  isLoading$: Observable<Boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector));
    this.error$ = this.store.pipe(select(errorArticleSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleDataSelector)),
      this.store.pipe(select(CurrentUserSelector)),
    ]).pipe(
      map(([article, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !currentUser) {
          return false;
        } else if (article.author.username === currentUser.username) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleDataSelector))
      .subscribe((article: IArticle | null) => {
        this.article = article;
      });
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
