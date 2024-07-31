import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowComponent } from './components/follow/follow.component';
import { FollowService } from './services/follow.service';
import { EffectsModule } from '@ngrx/effects';
import { FollowEffect } from './store/effects/follow.effect';

@NgModule({
  declarations: [FollowComponent],
  imports: [CommonModule, EffectsModule.forFeature(FollowEffect)],
  providers: [FollowService],
  exports: [FollowComponent],
})
export class FollowModule {}
