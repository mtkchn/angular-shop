import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public item$: Observable<Product>;

  constructor(private ps: ProductsService, private cartService: CartService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.item$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ps.getProduct(params.get('id')))
    );
  }

}


