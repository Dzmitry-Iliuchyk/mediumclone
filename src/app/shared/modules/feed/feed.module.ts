import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffect } from './store/effects/feed.effects';
import { StoreModule } from '@ngrx/store';
import { feedReducer } from './store/reduser';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading-module/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { LikesModule } from "../likes/likes.module";

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeedEffect]),
    StoreModule.forFeature(RedusersNames.feed, feedReducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    LikesModule
],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
