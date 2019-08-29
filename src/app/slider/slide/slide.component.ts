import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Slide } from '../slide';
import { SliderService } from '../slider.service';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger('right', [

      state('active', style({
        opacity: 1
      })),
      state('default', style({
        opacity: 0
      })),
      transition('active <=> default', animate('800ms  cubic-bezier(0.7, 0, 0.3, 1)')),
    
      
    ])
  ]
})
export class SlideComponent implements OnInit {
  @Input() slide: Slide;
  constructor(private service: SliderService) { }

  ngOnInit() {
  
  }


}
