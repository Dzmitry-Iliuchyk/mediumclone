import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule, RouterModule],
  exports: [TagListComponent],
})
export class TagListModule {}
