import {Injectable} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProduct(id: string): Observable<Product | undefined> {
    return this.http
      .get<any>(`http://localhost:4200/api/products/${id}`)
      .pipe(
        map(res => {
          return res.status === 'success' ? res.data : undefined
        }),
        catchError(err => {
          console.log(err)
          return of(undefined)
        })
      )
  }

  getRelatedProducts(productId: string): Observable<any[]> {
    return this.http
      .get<any>(`http://localhost:4200/api/products/${productId}/related`)
      .pipe(
        map(res => {
          return res.status === 'success' ? res.data : []
        }),
        catchError(err => {
          console.log(err)
          return of([])
        })
      )}

}
