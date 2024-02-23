import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PupularTagsModule } from '../shared/modules/pupular-tags/pupular-tags.module';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  exports: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PupularTagsModule,
  ],
})
export class YourFeedModule {}
