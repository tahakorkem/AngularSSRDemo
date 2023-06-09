import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product = this.route.snapshot.data['product'] as Product
  relatedProducts$ = this.productService.getRelatedProducts(this.product.id)

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute, private productService: ProductService) {
  }

}
