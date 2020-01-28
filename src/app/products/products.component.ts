import { Component, OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { DbService } from '../dbService';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;
  constructor(private ps: ProductsService, public CFR: ComponentFactoryResolver, ) { }

  ngOnInit() {
    this.ps.getProductsList().subscribe((data: Product[]) => {
      this.products = data;
    });
  }



}

