import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './components/likes.component';
import { LikeService } from './services/like.service';
import { EffectsModule } from '@ngrx/effects';
import { LikeEffect } from './store/effects/like.effect';

@NgModule({
  declarations: [LikesComponent],
  imports: [CommonModule, EffectsModule.forFeature([LikeEffect])],
  exports: [LikesComponent],
  providers: [LikeService],
})
export class LikesModule {}
