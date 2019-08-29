import { Slide } from './slide';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SliderService {
  iterator = 0;
  activeSlide: Slide;
  slides: any;

  constructor(private http: HttpClient) { }

  getSlides() {
    this.http.get('http://localhost:3000/slides')
      .subscribe((res) => {
        this.slides = res;
        this.slidesInit();
      })
      
  }

  slidesInit(){
   this.sliderRenderer(0);
  }
  
  sliderRenderer(i:number) {
    this.slides.map((slide:any) => {
      if(slide === this.slides[this.iterator]){
        slide.animationState = 'active';
      }else{
        slide.animationState = 'default';
      }
    })
    this.activeSlide = this.slides[i];
    
  }
}
