import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private authService: AuthService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(true);
  }
}
