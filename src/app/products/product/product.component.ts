import { Component, OnInit, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product;
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;
  constructor(private cartService: CartService, private productsService: ProductsService, public CFR: ComponentFactoryResolver) { }

  ngOnInit() {
  }



  index: number = 0;
  // to store references of dynamically created components
  componentsReferences = [];
  createComponent() {
    console.log('CreatingNotofication', this.CFR);

    let componentFactory = this.CFR.resolveComponentFactory(NotificationComponent);
    let componentRef: ComponentRef<NotificationComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }
}

