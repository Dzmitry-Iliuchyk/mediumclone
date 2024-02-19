import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { PersistenceService } from './shared/services/persistence.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [],
  providers: [
    PersistenceService,
    {
      useClass: AuthInterceptor,
      multi: true,
      provide: HTTP_INTERCEPTORS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
