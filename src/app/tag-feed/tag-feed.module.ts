import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent,  } from './components/tag-feed/tag-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PupularTagsModule } from '../shared/modules/pupular-tags/pupular-tags.module';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  exports: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PupularTagsModule,
  ],
})
export class TagFeedModule {}
