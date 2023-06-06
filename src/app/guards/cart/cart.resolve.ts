import {ResolveFn} from "@angular/router";
import {Observable} from "rxjs";

export const cartItemsResolver: ResolveFn<{ id: string, name: string, quantity: number }[]> = (route, state) => {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next([
        {id: '1', name: 'Product 1', quantity: 1},
        {id: '2', name: 'Product 2', quantity: 2},
        {id: '3', name: 'Product 3', quantity: 3},
        {id: '4', name: 'Product 4', quantity: 1},
        {id: '5', name: 'Product 5', quantity: 2},
      ])
      subscriber.complete()
    }, 1000)
  })
}
