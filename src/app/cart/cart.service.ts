import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products/products.service';

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
        return JSON.parse(localStorage.getItem('cart'));
    }

    setCartData() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    addTocart(product: Product) {
        if (this.cart.find(item => item.key === product.key)) {
            this.cart.find(item => item.key === product.key).quantity += 1;
        } else {
            this.cart.push(product);
            product.quantity = 1;
        }
        this.setCartData();
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
