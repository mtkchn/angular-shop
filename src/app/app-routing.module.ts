import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ADMIN_ROUTES } from './admin-page/admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';



const ROUTES: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent, children: ADMIN_ROUTES },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
