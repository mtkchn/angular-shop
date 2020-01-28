import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit() {
  }

  logOut() {
    console.log('logout');
    this.authService.doLogout().then(() => {
      this.router.navigate(['']);
    });
  }
}

// @HostListener('window:scroll', ['$event'])
// initSliderHeight(event?) {
//   this.scrolled = window.pageYOffset;
//   this.headerSwitch(this.scrolled);
// }
//
// headerSwitch(scroll) {
//   (scroll === 0 && window.location.pathname == '/') ? this.hederPosition = 'top' : this.hederPosition = 'scrolledPage';
// }
