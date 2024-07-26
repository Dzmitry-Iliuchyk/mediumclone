import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleService } from './services/create-article.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/create-article.effects';
import { StoreModule } from '@ngrx/store';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { createArticleReducer } from './store/reduser';

const routs = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature(RedusersNames.createArticle, createArticleReducer),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
