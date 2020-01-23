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
    private cartService: CartService,
    private productsService: ProductsService,
    private notificationManager: NotificationManager) { }

  // ngOnInit(): void {
  //   this.notificationManager.init(this.notificationBlock);
  // }

  // public showToast(header: string, description: string) {
  //   this.notificationManager.showToast(header, description, 17000);
  // }


  // to store references of dynamically created components

  // createComponent() {
  //   console.log('CreatingNotofication', this.CFR);

  //   let componentFactory = this.CFR.resolveComponentFactory(NotificationComponent);
  //   let componentRef: ComponentRef<NotificationComponent> = this.VCR.createComponent(componentFactory);
  //   let currentComponent = componentRef.instance;

  //   currentComponent.selfRef = currentComponent;
  //   currentComponent.index = ++this.index;

  //   // add reference for newly created component
  //   this.componentsReferences.push(componentRef);
  // }



}

