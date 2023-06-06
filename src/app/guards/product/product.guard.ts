import {CanActivateFn, Router} from '@angular/router';
import {delay, map, of} from "rxjs";
import {inject} from "@angular/core";

export const productGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return of(route.paramMap.get('id')!)
    .pipe(
      delay(1000),
      map(id => {
        if (['1', '2', '3'].includes(id)) {
          route.data = {
            ...route.data,
            product: {
              id,
              name: `Product ${id}`,
            }
          }
          return true;
        }
        return router.createUrlTree(['/not-found'])
      })
    )
};
