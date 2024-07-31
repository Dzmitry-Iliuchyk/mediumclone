import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from 'src/app/shared/modules/article/components/article/article.component';
import { ArticleEffect } from 'src/app/shared/modules/article/store/effects/article.effects';
import { articleReducer } from 'src/app/shared/modules/article/store/reduser';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { LoadingModule } from '../loading-module/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effects';
import { FollowModule } from "../follow/follow.module";
const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];
@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature(RedusersNames.article, articleReducer),
    RouterModule.forChild(routes),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    FollowModule
],
})
export class ArticleModule {}
