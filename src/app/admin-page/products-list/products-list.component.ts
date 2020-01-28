import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../dbService';
import { Product } from '../../models/product';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireList } from 'angularfire2/database';
import { ProductsService } from 'src/app/products/products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() recipeId: number;
  products: Product[];


  constructor(
    public db: DbService,
    private ps: ProductsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.ps.getProductsList().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteUser(user: Product) {
    console.log('Deleting...', user.imgUrl);
    this.db
      .deleteFromStorage(user.imgUrl)
      .catch(err => console.log(err));
    this.db
      .deleteFromDb('products', user.key)
      .catch(err => console.log(err));
  }

}
