import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product/product.service";
import {isPlatformBrowser} from "@angular/common";
import {Product} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product = this.route.snapshot.data['product'] as Product
  platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server'
  relatedProducts$ = this.platform === 'Browser'
    ? this.productService.getRelatedProducts(this.product.id)
    : undefined

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute, private productService: ProductService) {
  }

}
