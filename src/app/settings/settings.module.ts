import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RedusersNames } from 'src/helpers/redusersNames.enum';
import { createSettingsReducer } from './store/reducer';
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module';
import { ReactiveFormsModule } from '@angular/forms';

const routs = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    StoreModule.forFeature(RedusersNames.settings, createSettingsReducer),
    BackendErrorsModule,
    ReactiveFormsModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
