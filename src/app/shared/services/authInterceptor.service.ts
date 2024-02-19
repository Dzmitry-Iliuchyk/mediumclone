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
    const token: string = this.persist.get(LocalStorageEnum.accessToken);
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });
    console.log(req.headers);
    return next.handle(req);
  }
}
