import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../../dbService';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnInit {

  selectedFile = null;


  constructor(private http: HttpClient, public db: DbService) { }
  @ViewChild('preview') imgEl: ElementRef;
  isHovering: boolean;
  showProgressBar = false;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log('Event : ', event);
  }

  onDrop(files: FileList) {
    console.log('DROPPED!!!');
    for (let i = 0; i < files.length; i++) {
      this.db.product.file.push(files.item(i));
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imgEl.nativeElement.src = reader.result;
    };
    reader.readAsDataURL(files.item(0));
  }

  fileEvent(file) {
    this.db.product.file.push(file.target.files[0]);
    const reader = new FileReader();

    reader.onload = () => {
      this.imgEl.nativeElement.src = reader.result;
    };
    reader.readAsDataURL(file.target.files[0]);
  }

  loadData() {
    this.showProgressBar = true;
  }

  onSubmit() {
    if (this.db.product.file.length !== 0) {
      this.db.startUpload('products');
      console.log('percentage', this.db.percentage);
    } else {
      alert('Add image!!!');
    }

  }
}
