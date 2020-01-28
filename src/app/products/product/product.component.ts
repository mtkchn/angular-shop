import { Component, OnInit, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';
import { NotificationManager } from '../../notifications/notification.manager';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product;

  constructor(
    public cartService: CartService,
    public productsService: ProductsService,
    public notificationManager: NotificationManager) { }
}

