import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { SliderService } from './slider.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [SliderService]
})
export class SliderComponent implements OnInit {
  sHeight: number;
  slider: any;
  disabledClick = false;
  slides = [];
  constructor(private service: SliderService, private elementRef: ElementRef) { }



  ngOnInit() {
    console.log('initFun');
    this.slides = this.service.slides;
    this.service.slidesInit();
    console.log(this.slides);
    // this.service.getSlides();
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  cycle() {
    this.interval = setInterval(this.right, 5000);
  }



  @HostListener('window:load', ['$event'])
  initSliderHeight(event?) {
    this.sHeight = window.innerHeight;
    this.slider = this.elementRef.nativeElement.querySelector('.slider');
    this.slider.style.height = this.sHeight + 'px';
  }

  rightClick(event) {
    event.stopPropagation();
    if (this.disabledClick) { return false; }
    this.disableeClick();
    setTimeout(() => { this.disabledClick = false; }, 500);
    clearInterval(this.interval);
    this.cycle();
    this.right();

  }


  leftClick() {
    event.stopPropagation();
    if (this.disabledClick) return false;
    this.disableeClick();
    setTimeout(() => { this.disabledClick = false; }, 500);
    clearInterval(this.interval);
    this.cycle();
    this.left();
  }

  left() {
    this.service.iterator = this.service.iterator - 1;
    if (this.service.iterator < 0) this.service.iterator = this.service.slides.length - 1;
    this.service.sliderRenderer(this.service.iterator)
  }

  right = () => {
    this.service.iterator = this.service.iterator + 1;
    if (this.service.iterator > this.service.slides.length - 1) this.service.iterator = 0;
    this.service.sliderRenderer(this.service.iterator)
  }
  interval = setInterval(this.right, 5000);

  disableeClick() {
    this.disabledClick = true;
  }

  toSlide(i: number) {
    clearInterval(this.interval);
    this.cycle();
    this.service.iterator = i;
    this.service.sliderRenderer(this.service.iterator);
  }


}

