import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('headerState', [
      state('top', style({
        height: '105px',
      })),

      state('scrolledPage', style({
        height: '65px',
        backgroundColor: '#000'
      })),
      transition('top <=> scrolledPage', animate(500))
    ]),

    trigger('imgStatus', [
      state('top', style({
        width: '150px',
      })),

      state('scrolledPage', style({
        width: '60px',
      })),



    ])
  ]
})
export class HeaderComponent implements OnInit {
  bagActive = false;
  scrolled: number = 0;
  hederPosition = 'scrolledPage';
  constructor(private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  initSliderHeight(event?) {
    this.scrolled = window.pageYOffset;
    this.headerSwitch(this.scrolled);
  }

  headerSwitch(scroll) {

    // console.log('UUURRRLLL:   ', window.location.pathname);
    (scroll === 0 && window.location.pathname == '/') ? this.hederPosition = "top" : this.hederPosition = "scrolledPage";
  }

  ngAfterContentInit() {
    console.log('scrolled : ', this.scrolled);
    this.headerSwitch(this.scrolled);
  }
  ngOnInit() {
  }

}
