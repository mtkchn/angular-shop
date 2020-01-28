import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../dbService';
import { map, concatMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { Observable, of, Observer } from 'rxjs';
import { NotificationManager } from '../notifications/notification.manager';

@Injectable()
export class ProductsService {

    products: Product[];

    notificationShow = false;
    notificationContent: any;
    constructor(private http: HttpClient, public db: DbService, private notificationManager: NotificationManager) { }

    getProductsList(): Observable<Product[]> {
        return this.db.getDataFromDb('products').snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                    ({ key: c.payload.key, ...c.payload.val() })
                )
            )
        );
    }

    getProduct(id: string) {
        return this.getProductsList().pipe(
            // (+) before `id` turns the string into a number
            map((heroes: Product[]) => heroes.find(hero => hero.key === id))
        );
    }

    updateItem(product: Product) {
        this.db
            .updateUser('products', product.key, product)
            .catch(err => console.log(err));
    }

    public showToast(header: string, description: string) {
        this.notificationManager.showToast(header, description, 4000);
    }

    // getProducts() {
    //   this.http.get('http://localhost:3000/products')
    //     .subscribe((res) => {
    //       this.products = res;
    //       console.log('products',this.products);
    //     })
    // }

    // notification(product) {
    //     console.log(product);
    //     this.notificationContent = product;
    //     this.notificationShow = true;
    //     console.log('NOTIFICATION!!!', this.notificationShow);
    //     setTimeout(() => {
    //         this.notificationShow = false;
    //         console.log('end notification', this.notificationShow)
    //     }, 3000);
    // }

    // showProduct(product) {
    //     this.productToShow = product;
    // }
}
