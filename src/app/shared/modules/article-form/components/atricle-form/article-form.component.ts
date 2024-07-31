import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { IArticleInput } from 'src/app/shared/types/IArticleInput.interface';

@Component({
  selector: 'mc-atricle-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: IBackEndErrors | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<IArticleInput>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializrForm();
  }
  initializrForm() {
    this.form = this.fb.group({
      title: this.initialValuesProps.article.title,
      description: this.initialValuesProps.article.description,
      body: this.initialValuesProps.article.body,
      tagList: this.initialValuesProps.article.tagList.join(' '),
    });
  }

  onSubmit(): void {
    const article: IArticleInput = {
      article: {
        title: this.form.value['title'],
        description: this.form.value['description'],
        body: this.form.value['body'],
        tagList: this.form.value['tagList'].split(' '),
      },
    };
    this.articleSubmitEvent.emit(article);
  }
}
