import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { followAction } from '../../store/actions/follow.action';

@Component({
  selector: 'mc-user-follow',
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss',
})
export class FollowComponent implements OnInit {
  @Input('isFollowed') followedProps: boolean;
  @Input('userName') userNameProps: string;
  btnText: string;
  isFollowed: boolean;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isFollowed = this.followedProps;
    this.changeText();
  }
  follow() {
    this.store.dispatch(
      followAction({
        isFollowed: this.isFollowed,
        userName: this.userNameProps,
      })
    );
    this.isFollowed = !this.isFollowed;
    this.changeText();
    console.log(
      'Follow',
      'isFollowed',
      this.isFollowed,
      '\n Text:',
      this.btnText
    );
  }
  changeText() {
    this.btnText = this.isFollowed
      ? `Unfollow ${this.userNameProps}`
      : `Follow ${this.userNameProps}`;
  }
}
