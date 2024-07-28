import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { ILoginRequest } from 'src/app/auth/types/loginRequest.interface';
import { loginAction } from 'src/app/auth/store/actions/login.actions';
import {
  BackendErrorsSelector,
  isSubmittingSelector,
} from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackEndErrors | null>;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  onSubmit(): void {
    let request: ILoginRequest = { user: this.form.value };
    this.store.dispatch(loginAction({ request }));
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(BackendErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
