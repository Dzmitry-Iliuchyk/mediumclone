import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleService } from '../shared/services/article.service';
import { ArticleComponent } from 'src/app/article/components/article/article.component';
import { ArticleEffect } from './store/effects/article.effects';
import { articleReducer } from './store/reduser';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]
@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [ArticleService],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffect]),
    StoreModule.forFeature(RedusersNames.article, articleReducer),
    RouterModule.forChild(routes),
  ],
})
export class ArticleModule {}
