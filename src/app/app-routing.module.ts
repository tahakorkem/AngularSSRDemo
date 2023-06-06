import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {CartComponent} from "./cart/cart.component";
import {productGuard} from "./guards/product/product.guard";
import {NotFoundComponent} from "./not-found/not-found.component";
import {cartItemsResolver} from "./guards/cart/cart.resolve";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [productGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    resolve: {
      items: cartItemsResolver
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
