import { Injectable, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (localStorage.getItem('token')) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
      }
      return next.handle(req);
    }
}