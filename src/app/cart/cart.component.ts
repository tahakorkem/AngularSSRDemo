import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.route.snapshot.data['items'] as {id: string, name: string, quantity: number}[]
  constructor(private route: ActivatedRoute) { }

}
