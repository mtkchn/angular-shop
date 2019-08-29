import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('headerState', [
      state('top', style({
        height: '105px'
      })),

      state('scrolledPage', style({
        height: '65px',
        backgroundColor: '#000'
      })),
      transition('top <=> scrolledPage', animate(500))
    ]),


    trigger('imgStatus', [
      state('top', style({
        height: '105px',
        color: '#fff'
      })),

      state('scrolledPage', style({
        height: '60px',
        backgroundColor: 'red',
        color: '#000'
      })),

      
    ])
  ]
})

export class HeaderComponent implements OnInit {
  bagActive = false;
  scrolled : number;
  hederPosition = 'top';
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  initSliderHeight(event?) {
    this.scrolled = window.pageYOffset;
    console.log(this.scrolled);
    this.headerSwitch(this.scrolled);
  }

  headerSwitch(scroll)
  {
    (scroll === 0) ? this.hederPosition = "top": this.hederPosition = "scrolledPage";
  }

  ngOnInit() {
  }

}
