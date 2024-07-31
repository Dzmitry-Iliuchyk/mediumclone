import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ProfileService } from './service/profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { StoreModule } from '@ngrx/store';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { getUserProfilrReducer } from './store/reducer';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FollowModule } from '../shared/modules/follow/follow.module';

const routs = [
  {
    path: 'profiles/:slug',
    component: ProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature(RedusersNames.userProfile, getUserProfilrReducer),
    FeedModule,
    FollowModule,
  ],
  providers: [ProfileService],
})
export class ProfileModule {}
