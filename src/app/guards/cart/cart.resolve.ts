import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {CartItem} from "../../models/cart-item";
import {CartService} from "../../services/cart/cart.service";

export const cartItemsResolver: ResolveFn<CartItem[]> = (route, state) => {
  const cartService = inject(CartService);
  return cartService.getCartItems()
}
