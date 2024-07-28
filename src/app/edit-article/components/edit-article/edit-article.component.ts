import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { getArticleAction } from '../../store/actions/get-article.action';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selector';
import { IArticleInput } from 'src/app/shared/types/IArticleInput.interface';
import { editArticleAction } from '../../store/actions/edit-article.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<IArticleInput | null>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backEndErrors$: Observable<IBackEndErrors | null>;
  slug: string;
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article) => {
        return {
          article: {
            title: article.title,
            description: article.description,
            body: article.body,
            tagList: article.tagList,
          },
        };
      })
    );
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(editArticleAction({ slug: this.slug, articleInput }));
  }
}
