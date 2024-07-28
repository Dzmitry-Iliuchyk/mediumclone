import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { CurrentUserSelector } from 'src/app/auth/store/selectors';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selector';
import { ICurrentUserInput } from 'src/app/shared/types/ICurrentUserInput.interface';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { logOutAction } from 'src/app/auth/store/actions/sync.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: ICurrentUser;
  currentUserSubscription: Subscription;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<IBackEndErrors | null>;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(CurrentUserSelector), filter(Boolean))
      .subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }
  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }
  logOut() {
    this.store.dispatch(logOutAction());
  }
  onSubmit(): void {
    const newSettings: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({ request: newSettings }));
  }
}
