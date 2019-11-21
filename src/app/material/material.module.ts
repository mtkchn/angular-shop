import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';


const MaterialComponents = [
  MatDividerModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }