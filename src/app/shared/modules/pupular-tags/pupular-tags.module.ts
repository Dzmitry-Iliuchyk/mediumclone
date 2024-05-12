import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { TagListModule } from '../tag-list/tag-list.module';
import { StoreModule } from '@ngrx/store';
import { tagReducer } from './store/reduser';
import { TagsService } from './services/Tags.service';
import { EffectsModule } from '@ngrx/effects';
import { TagEffect } from './store/effects/get-tags.effect';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading-module/loading.module';
import { RedusersNames } from 'src/helpers/redusersNames.enum';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    TagListModule,
    StoreModule.forFeature(RedusersNames.tags, tagReducer),
    EffectsModule.forFeature([TagEffect]),
    ErrorMessageModule,
    LoadingModule,
  ],
  exports: [PopularTagsComponent],
  providers: [TagsService],
})
export class PupularTagsModule {}
