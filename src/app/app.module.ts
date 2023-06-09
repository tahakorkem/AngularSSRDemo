import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './product/product.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from './not-found/not-found.component';
import {RandomIntPipe} from './pipes/random-int/random-int.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserStateInterceptor} from "./interceptors/browser-state.interceptor";
import {ConfigService} from "./services/config/config.service";

const initializeAppFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    NotFoundComponent,
    RandomIntPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [ConfigService],
      multi: true,
    },
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
