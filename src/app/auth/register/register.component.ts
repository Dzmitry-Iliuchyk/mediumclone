import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import {
  BackendErrorsSelector,
  isSubmittingSelector,
} from 'src/app/auth/store/selectors';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackEndErrors | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
  ) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.isSubmitting$.subscribe(console.log);
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(BackendErrorsSelector));
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: IRegisterRequest = { user: this.form.value };
    this.store.dispatch(registerAction({ request }));
  }
}
