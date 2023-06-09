import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.route.snapshot.data['items'] as CartItem[]

  constructor(private route: ActivatedRoute) {
  }

}
