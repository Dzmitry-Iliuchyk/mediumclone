import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditArticleService } from './services/edid-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { EditArticleEffect } from './store/effects/edit-article.effect';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { StoreModule } from '@ngrx/store';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { editArticleReducer } from './store/reduser';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading-module/loading.module';
import { RouterModule } from '@angular/router';

const routs = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    StoreModule.forFeature(RedusersNames.editArticle, editArticleReducer),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
