import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { GlobalFeedModule } from '../global-feed/global-feed.module';
import { PupularTagsModule } from '../shared/modules/pupular-tags/pupular-tags.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
];

@NgModule({
  declarations: [BodyComponent],
  exports: [BodyComponent],
  imports: [
    CommonModule,
    BannerModule,
    GlobalFeedModule,
    PupularTagsModule,
    RouterModule.forChild(routes),
  ],
})
export class BodyModule {}
