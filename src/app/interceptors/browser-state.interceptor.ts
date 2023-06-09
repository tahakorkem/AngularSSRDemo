import {Inject, Injectable, makeStateKey, PLATFORM_ID, TransferState} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {isPlatformServer} from "@angular/common";

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isPlatformServer(this.platformId) || req.method !== 'GET') {
      return next.handle(req);
    }
    console.log('BrowserStateInterceptor is intercepting request')

    const key = makeStateKey<string>(req.url);

    const storedResponse = this.transferState.get(key, null);

    if (storedResponse) {
      console.log('BrowserStateInterceptor is returning stored response')
      const response = new HttpResponse({body: storedResponse, status: 200});
      this.transferState.remove(key);
      return of(response)
    }

    return next.handle(req);
  }

}
