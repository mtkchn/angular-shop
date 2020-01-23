import { resolve } from 'url';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
@Injectable()
export class AuthService {
    isLoggedIn = false;

    constructor(public afAuth: AngularFireAuth) { }

    isAuth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 5000);
        });
    }

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err))
        })
    }

    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }

    doLogout() {
        return new Promise((resolve, reject) => {
            if (this.afAuth.auth.currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            } else {
                reject();
            }
        });
    }
}
