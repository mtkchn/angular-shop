import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

import { Product } from './models/product';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class DbService {

    private dbPath = 'users';
    usersRef: AngularFireList<Product> = null;

    task: AngularFireUploadTask;

    percentage: Observable<number>;
    snapshot: Observable<Product>;
    downloadURL: string;

    product: any = {
        title: '',
        description: '',
        materials: '',
        price: '',
        file: [],
        imgName: '',
        imgUrl: ''
    };

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
        this.usersRef = db.list(this.dbPath);
    }

    startUpload(dbPath) {

        // The storage path
        const path = `produtsImgs/${Date.now()}_${this.product.file[0].name}`;

        // Reference to storage bucket
        const ref = this.storage.ref(path);

        // The main task
        this.task = this.storage.upload(path, this.product.file[0]);
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.storage.upload(path, this.product.file[0]).snapshotChanges().pipe(

            // The file's download URL
            finalize(async () => {
                console.log('FINALIZE FUNCTION!!!');
                this.percentage = null;
                this.downloadURL = await ref.getDownloadURL().toPromise();
                this.product.imgUrl = this.downloadURL;
                this.writeDataToDb(dbPath);

                this.product.title = '';
                this.product.description = '';
                this.product.materials = '';
                this.product.price = '';
                this.product.file = [];
                this.product.imgName = '';
                this.product.imgUrl = '';
            }),
        ).subscribe();
    }

    deleteFromStorage(path: string) {
        return this.storage.storage.refFromURL(path).delete();
    }
    writeDataToDb(path: string) {
        this.db.list(path).push(this.product);

    }

    getDataFromDb(path: string): AngularFireList<Product> {
        return this.db.list(path);
    }

    updateUser(path: string, key: string, value: any): Promise<void> {
        return this.db.list(path).update(key, value);
    }
    deleteFromDb(path: string, key: string): Promise<void> {
        return this.db.list(path).remove(key);
    }




}
