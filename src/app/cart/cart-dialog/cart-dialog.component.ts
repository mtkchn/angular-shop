import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  ngOnInit() {
    this.changePosition();
  }

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private cartService: CartService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '50px', right: '50px' });
  }
}
