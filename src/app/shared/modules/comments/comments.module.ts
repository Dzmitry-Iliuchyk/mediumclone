import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GetCommentsEffect } from './store/effects/getComments.effect';
import { PostCommentEffect } from './store/effects/postComment.effect';
import { StoreModule } from '@ngrx/store';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { commentsReducer } from './store/reducer';
import { LoadingModule } from '../loading-module/loading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from './services/comments.service';

@NgModule({
  declarations: [CommentsComponent, CommentCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetCommentsEffect, PostCommentEffect]),
    StoreModule.forFeature(RedusersNames.comments, commentsReducer),
    LoadingModule,
    ReactiveFormsModule,
  ],
  providers: [CommentsService],
  exports: [CommentsComponent],
})
export class CommentsModule {}
