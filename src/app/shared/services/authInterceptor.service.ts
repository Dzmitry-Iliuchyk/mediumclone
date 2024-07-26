import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from './persistence.service';
import { LocalStorageEnum } from '../enums/localStorage.enum';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persist: PersistenceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = this.persist.get(
      LocalStorageEnum.accessToken.toString()
    );

    const request = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`),
    });

    return next.handle(request);
  }
}
