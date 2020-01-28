import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatProgressBarModule } from '@angular/material';

const MaterialComponents = [
  MatDividerModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatProgressBarModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
