import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DropzoneDirective } from './dropzone.directive';

@NgModule({
  declarations: [
    AdminPageComponent,
    CreateProductFormComponent,
    ProductsListComponent,
    UploadTaskComponent,
    DropzoneDirective

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
