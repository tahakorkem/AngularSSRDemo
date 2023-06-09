import {Injectable, makeStateKey, TransferState} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferState) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    console.log('ServerStateInterceptor is intercepting request')

    const key = makeStateKey<string>(req.url);

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.transferState.set(key, event.body)
        }
      })
    )
  }

}
