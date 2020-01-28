import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
  public index: number;
  public selfRef: NotificationComponent;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
