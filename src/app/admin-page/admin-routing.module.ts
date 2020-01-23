import { Routes } from '@angular/router';
import { AdminModuleModule } from './admin-module.module';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';
import { EditItemComponent } from './edit-item/edit-item.component';

export const ADMIN_ROUTES: Routes = [
    { path: 'new', component: CreateProductFormComponent },
    { path: ':id', component: EditItemComponent },
    // {path : ':id/edit', component: RecipeEditComponent}
];
