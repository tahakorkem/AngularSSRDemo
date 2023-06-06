import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product = this.route.snapshot.data['product'] as { id: string, name: string }

  constructor(private route: ActivatedRoute) {
  }

}
