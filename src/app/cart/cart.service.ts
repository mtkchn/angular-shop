import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ProductsService } from '../products/products.service';
import { CartItem } from '../models/cart.item';

@Injectable()
export class CartService {
    cart: Product[];

    constructor(private ps: ProductsService) {
        if (this.getCartData() === null || this.getCartData() === {}) {
            this.cart = [];
        } else {
            this.cart = this.getCartData();
        }
    }

    getCartData() {
        // localStorage.removeItem('cart');
        return JSON.parse(localStorage.getItem('cart'));
    }
    // Записываем данные в LocalStorage
    setCartData() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log('Zapisyvajem Cookies!!!');

    }

    addTocart(product: Product) {
        console.log('adding to cart!!');
        console.log(' =?  : ', this.cart.find(item => item.key === product.key));
        if (this.cart.find(item => item.key === product.key)) {
            this.cart.find(item => item.key === product.key).quantity += 1;
        } else {
            console.log('false');

            this.cart.push(product);
            product.quantity = 1;
        }
        this.setCartData();
        console.log('cart :', this.cart);
    }

    removeQuantity(product: Product) {
        if (product.quantity < 2) {
            this.deleteFromCart(product);
        } else {
            product.quantity--;
        }
    }
    deleteFromCart(product) {
        // tslint:disable-next-line:no-shadowed-variable
        const item = this.cart.find(item => item.key === product.key);
        this.cart.splice(this.cart.indexOf(item), 1);
        this.setCartData();
    }


    calculateOrderPrice() {
        let result = 0;
        this.cart.forEach(element => {
            result += element.quantity * element.price;
        });
        return result;
    }
}
