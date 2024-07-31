import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUserSelector } from 'src/app/auth/store/selectors';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { ICommentsResponse } from 'src/app/shared/types/IComment.interface';
import {
  commentsSelector,
  isLoadingCommentSelector,
} from '../../store/selectors';
import { ICommentFromBack } from 'src/app/shared/types/ICommentFromBack.interface';
import { postCommentAction } from '../../store/actions/postComment.action';
import { getCommentsAction } from '../../store/actions/getComments.action';

@Component({
  selector: 'mc-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  currentUser$: Observable<ICurrentUser | null>;
  comments$: Observable<ICommentFromBack[] | null>;
  isLoading$: Observable<boolean>;
  @Input('slug') slugProps: string;

  form: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}
  ngOnInit(): void {
    console.log('slug', this.slugProps);
    this.fetchData();
    this.initializeValues();
    this.clearForm();
  }
  initializeValues() {
    this.currentUser$ = this.store.pipe(select(CurrentUserSelector));
    this.comments$ = this.store.pipe(select(commentsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingCommentSelector));
  }
  clearForm(): void {
    this.form = this.fb.group({
      body: '',
    });
  }
  fetchData() {
    this.store.dispatch(getCommentsAction({ slug: this.slugProps }));
  }
  submit(): void {
    console.log(this.form.value);
    this.store.dispatch(
      postCommentAction({ slug: this.slugProps, body: this.form.value })
    );
    this.fetchData();
    this.clearForm();
  }
  sortCommentFunc(a: ICommentFromBack, b: ICommentFromBack):number
    { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();}
  
}
