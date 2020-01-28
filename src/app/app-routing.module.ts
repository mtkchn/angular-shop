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
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';



const ROUTES: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard], children: ADMIN_ROUTES },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
