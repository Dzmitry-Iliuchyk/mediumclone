import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { IArticleInput } from 'src/app/shared/types/IArticleInput.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selector';
import { createArticleAction } from '../store/actions/create-articles.actions';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss',
})
export class CreateArticleComponent implements OnInit {
  initialValues: IArticleInput = {
    article: {
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  };

  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<IBackEndErrors | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
