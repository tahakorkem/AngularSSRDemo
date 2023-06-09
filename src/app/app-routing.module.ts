import {NgModule} from '@angular/core';
import {Data, RouterModule, Routes} from "@angular/router";
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
    data: {
      titleFn: () => 'Home',
      descriptionFn: () => 'Home page'
    }
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [productGuard],
    data: {
      titleFn: (data: Data) => `${data["product"].name} - Details`,
      descriptionFn: (data: Data) => `Description of ${data["product"].name}`
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    resolve: {
      items: cartItemsResolver
    },
    data: {
      titleFn: () => 'Cart',
      descriptionFn: () => 'Cart page'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      titleFn: () => 'Not Found',
      descriptionFn: () => 'Not Found page'
    }
  },
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
