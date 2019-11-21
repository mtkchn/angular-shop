import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';



const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
