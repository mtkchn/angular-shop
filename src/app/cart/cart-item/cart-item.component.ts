import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() item: any;
  totalItemPrice: number;

  constructor(private cartService: CartService) { }

  ngOnChanges() {
    this.totalItemPrice = this.item.price * this.item.quantity;
  }

  ngOnInit() {

  }


}
