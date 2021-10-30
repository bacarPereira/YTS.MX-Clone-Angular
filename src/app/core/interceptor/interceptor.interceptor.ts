import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SpinerService } from '../spiner/spiner.service';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    private spinerService:SpinerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinerService.showSpiner();

    return next.handle(request).pipe(catchError((err:HttpErrorResponse) => {
      return throwError(err);
  }),
    finalize(()=> this.spinerService.hideSpiner())
  );
}
}
