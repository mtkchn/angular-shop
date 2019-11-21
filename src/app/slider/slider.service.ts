import { Slide } from './slide';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SliderService {
    iterator = 0;
    activeSlide: Slide;
    slides = [
        { id: 1, img: "/assets/img/1.jpg", title: "Эрато", text: "Уникальное белье, которое подчеркнет все достоинства вашего тела." },
        { id: 2, img: "/assets/img/2.jpg", title: "Лучшие цены!", text: "На самые популярные модели 2019 года" },
        { id: 3, img: "/assets/img/3.jpg", title: "Slide 3", text: "Заголовок слайда" },
        { id: 1, img: "/assets/img/1.jpg", title: "Эрато 4", text: "Уникальное белье, которое подчеркнет все достоинства вашего тела." },
        { id: 2, img: "/assets/img/2.jpg", title: "Лучшие цены! 5", text: "На самые популярные модели 2019 года" },
        { id: 3, img: "/assets/img/3.jpg", title: "Slide 6", text: "Заголовок слайда" }
    ]

    constructor(private http: HttpClient) { }

    // getSlides() {
    //   this.http.get('http://localhost:3000/slides')
    //     .subscribe((res) => {
    //       this.slides = res;
    //     })
    // }

    slidesInit() {
        this.sliderRenderer(0);
    }

    sliderRenderer(i: number) {
        this.slides.map((slide: any) => {
            if (slide === this.slides[this.iterator]) {
                slide.animationState = 'active';
            } else {
                slide.animationState = 'default';
            }
        })
        this.activeSlide = this.slides[i];

    }
}
