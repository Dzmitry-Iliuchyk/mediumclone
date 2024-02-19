import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getTagsAction,
  getTagsFailureAction,
  getTagsSuccessAction,
} from '../actions/get-tags.actions';
import { ITagResponse } from '../../types/tagsResponce.interface';
import { TagsService } from '../../services/Tags.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TagEffect {
  tags$ = createEffect(() =>
    this.action$.pipe(
      ofType(getTagsAction),
      switchMap(() => {
        console.log('effects');
        return this.tagService.getTags().pipe(
          map((tags: ITagResponse) => {
            return getTagsSuccessAction({ tags });
          }),
          catchError((error: string) => {
            return of(getTagsFailureAction({error}));
          })
        );
      })
    )
  );
  constructor(private action$: Actions, private tagService: TagsService) {}
}
