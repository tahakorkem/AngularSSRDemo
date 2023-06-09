import {CanActivateFn, Router} from '@angular/router';
import {map} from "rxjs";
import {inject} from "@angular/core";
import {ProductService} from "../../services/product/product.service";

export const productGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const productService = inject(ProductService);

  const {id} = route.params

  return productService.getProduct(id).pipe(
    map(product => {
      if (product) {
        // pass product to route data
        route.data = {
          ...route.data,
          product
        }
        return true;
      }
      return router.createUrlTree(['/not-found'])
    })
  )
};
