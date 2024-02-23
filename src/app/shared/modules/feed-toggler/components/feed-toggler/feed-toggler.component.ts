import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IsLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss',
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null;
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
  }
  initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector));
  }
}
