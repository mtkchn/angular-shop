import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component'

import { OrderFormComponent } from './order-form/order-form.component';

const appRoutes: Routes = [
    { path: 'createorder', component: OrderFormComponent},
  ];

  
@NgModule({

})
export class RoutingModule{

}