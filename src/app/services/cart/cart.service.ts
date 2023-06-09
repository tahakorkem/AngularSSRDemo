import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {CartItem} from "../../models/cart-item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http
      .get<any>(`http://localhost:4200/api/cart`)
      .pipe(
        map(res => {
          return res.status === 'success' ? res.data : []
        }),
        catchError(err => {
            console.log(err)
            return of([])
          }
        )
      )
  }
}
