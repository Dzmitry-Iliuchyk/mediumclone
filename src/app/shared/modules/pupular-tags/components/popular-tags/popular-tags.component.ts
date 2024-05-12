import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITagResponse } from 'src/app/shared/modules/pupular-tags/types/tagsResponce.interface';
import {
  TagSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/pupular-tags/store/tagSelector';
import { getTagsAction } from 'src/app/shared/modules/pupular-tags/store/actions/get-tags.actions';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  tags$: Observable<ITagResponse>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getTagsAction());
    this.tags$ = this.store.pipe(select(TagSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }
}
