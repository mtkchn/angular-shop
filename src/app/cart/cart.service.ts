import { Injectable } from '@angular/core';
@Injectable()
export class CartService {
    cart = new Set();
    bookmarks = new Set();
    addTocart(product) {
        console.log('adding to cart!!');

        if (this.cart.has(product)) {
            product.quantity++;
            console.log(product.quantity);
        } else {
            this.cart.add(product);
            product.quantity = 1;
        }
        console.log('cart :', this.cart);
    }

    addBookmark(product) {
        this.bookmarks.add(product);
    }

    deleteBookmark(product) {
        this.bookmarks.delete(product);
    }

    removeQuantity(product) {
        if (product.quantity < 2) {
            this.deleteFromCart(product);
        } else {
            product.quantity--;
        }
    }
    deleteFromCart(product) {
        this.cart.delete(product);
    }


    calculateOrderPrice() {
        let result = 0;
        this.cart.forEach(element => {
            result += element.quantity * element.price;
        });
        return result;
    }


    sumCalculation() {

        let sum;
        this.cart.forEach(element => {
            console.log('quantity', element.quantity, 'price ', element.price);
        });
        console.log('sum = ', sum);

    }


}