import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('USER :::: ', this.auth.afAuth.auth.currentUser);

        if (this.auth.afAuth.auth.currentUser) {
            return true;
        } else {
            return false;
        }


    }
}
