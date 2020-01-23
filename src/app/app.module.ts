import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slider/slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CartService } from './cart/cart.service';
import { NotificationComponent } from './notification/notification.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { ProductsService } from './products/products.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotificationModule } from './notifications/notification.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { DbService } from './dbService';
import { AngularFireStorage } from 'angularfire2/storage';
import { AdminModuleModule } from './admin-page/admin-module.module';
import { EditItemComponent } from './admin-page/edit-item/edit-item.component';
import { CartDialogComponent } from './cart/cart-dialog/cart-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
// import { DynamicModalPageModule } from "./dynamicModalPage/dynamicModalPage.module";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    SliderComponent,
    SlideComponent,
    CartComponent,
    CartItemComponent,
    ProductsComponent,
    ProductComponent,
    NotificationComponent,
    ProductPageComponent,
    CartPageComponent,
    EditItemComponent,
    CartDialogComponent,
    PageNotFoundComponent,
    AuthComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NotificationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AdminModuleModule,
    ReactiveFormsModule
  ],
  providers: [CartService, ProductsService, DbService, AngularFireStorage, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent, CartDialogComponent]
})
export class AppModule { }
