import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { PupularTagsModule } from '../shared/modules/pupular-tags/pupular-tags.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    ErrorMessageModule,
    PupularTagsModule,
  ],
})
export class GlobalFeedModule {}
