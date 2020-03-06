import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from './cart.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartDialogComponent } from '../cart/cart-dialog/cart-dialog.component';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService, public dialog: MatDialog) { }

  ngOnInit() {
    localStorage.setItem('myCat', 'Tom');
  }

  openDialog(): void {
    this.dialog.open(CartDialogComponent, {
      width: '500px',
      maxHeight: '666px'
    });
  }
}

