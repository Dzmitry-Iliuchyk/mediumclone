import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [CommonModule, TagListModule],
  exports: [PopularTagsComponent],
})
export class PupularTagsModule {
  
}
