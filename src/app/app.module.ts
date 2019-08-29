import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slider/slide/slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { MatDividerModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RoutingModule } from './routing.module';
import { PageContentComponent } from './page-content/page-content.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SlideComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    CartItemComponent,
    BookmarksComponent,
    OrderFormComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
