import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { favoriteAction } from '../store/actions/favorite.action';

@Component({
  selector: 'mc-likes',
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.scss',
})
export class LikesComponent implements OnInit {
  @Input('likesCount') favoritesCountProps: number;
  @Input('liked') favoritedProps: boolean;
  @Input('articleSlug') articleSlugProps: string;
  favoritesCount: number;
  isFavorited: boolean;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.favoritedProps;
  }

  onClick(): void {
    this.store.dispatch(
      favoriteAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else if (!this.isFavorited) {
      this.favoritesCount += 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
