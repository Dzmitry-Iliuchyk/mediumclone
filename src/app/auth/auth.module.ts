import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { authReducer } from 'src/app/auth/store/reducer';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorsModule } from 'src/app/shared/modules/backend-errors/backend-errors.module';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LoginEffect } from './store/effects/login.effects';
import { LoginComponent } from './login/login.component';
import { GetCurrentUserEffect } from './store/effects/getCurrenrUser.effects';

const route: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorsModule,
    
  ],
})
export class AuthModule {}
