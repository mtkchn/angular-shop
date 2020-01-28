import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ProductsService } from 'src/app/products/products.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product';
import { DbService } from 'src/app/dbService';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  public item: Product;
  constructor(
    private route: ActivatedRoute,
    private ps: ProductsService,
    public db: DbService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ps.getProduct(params.get('id')))
    ).subscribe((data: Product) => {
      this.item = data;
      console.log('item$', this.item);
    });
  }

  onSubmit(form: NgForm) {

    this.item.title = form.value.title;
    this.item.description = form.value.description;
    this.item.materials = form.value.materials;
    this.item.price = form.value.price;

    this.ps.updateItem(this.item);
  }

}
