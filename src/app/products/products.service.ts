import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
    // products: any = [];
    products = [
        { productId: 1, img: "/assets/img/products/1.jpg", title: "Боди «ПОДАРОК»", text: "Боди «ПОДАРОК» - это счастье для любой женщины! Это боди создаёт лёгкий и игривый образ. Сделано из качественной атласной ткани насыщенного синего цвета и имеет износостойкий эффект. Оно визуально подчеркнёт и округлит ваши ягодицы, акцентирует талию и кокетливо прикроет грудь. Это боди настоящий ПОДАРОК для тебя и него! Твой эффектный и сексуальный образ останется в его памяти НАВСЕГДА!", materials: "Состав : 70% ПЭ, 30%Эластан Материал : кружево , атласная эластичная лента , фурнитура", price: 1000 },
        { productId: 2, img: "/assets/img/products/2.jpg", title: "Боди 2", text: "Боди «ПОДАРОК»!", materials: "Состав : 70% ПЭ, 30%Эластан Материал : кружево , атласная эластичная лента , фурнитура", price: 2000 },
        { productId: 3, img: "/assets/img/products/3.jpg", title: "Боди 3", text: "Боди «ПОДАРОК»!", materials: "Состав : 70% ПЭ, 30%Эластан Материал : кружево , атласная эластичная лента , фурнитура", price: 3000 },
        { productId: 4, img: "/assets/img/products/4.jpg", title: "Боди 4", text: "Боди «ПОДАРОК»!", materials: "Состав : 70% ПЭ, 30%Эластан Материал : кружево , атласная эластичная лента , фурнитура", price: 4000 },
        { productId: 5, img: "/assets/img/products/1.jpg", title: "Боди 5", text: "Боди «ПОДАРОК»!", materials: "Состав : 70% ПЭ, 30%Эластан Материал : кружево , атласная эластичная лента , фурнитура", price: 5000 }
    ]

    notificationShow = false;
    notificationContent: any;
    productToShow: any = this.products[0];

    constructor(private http: HttpClient) { }

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

    showProduct(product) {
        this.productToShow = product;
    }
}
