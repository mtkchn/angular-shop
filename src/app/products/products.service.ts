import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
  products: any = [];
  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get('http://localhost:3000/products')
      .subscribe((res) => {
        this.products = res;
        console.log('products',this.products);
      })
  }
}
