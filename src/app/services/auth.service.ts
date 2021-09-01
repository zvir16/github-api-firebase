import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: AngularFireAuth
  ) {
    this.user$ = this.authService.authState;
  }

  getAuthState():Observable<boolean> {
    return this.isAuth$.asObservable();
  }

  setAuth(status: boolean) {
    this.isAuth$.next(status);
  }

  signIn(email: string, password: string): Promise<firebase.User> {
    return new Promise<any>((resolve, reject ) => {
      this.authService.createUserWithEmailAndPassword(email, password)
        .then(data => {
          this.setAuth(true);
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  login(email: string, password: string): Promise<firebase.User> {
    return new Promise<any>((resolve, reject ) => {
      this.authService.signInWithEmailAndPassword(email, password)
        .then(data => {
          this.setAuth(true);
          resolve(data);
        })
        .catch(error => reject(error));
    });
  }

  signInWithGithub(): Promise<firebase.User> {
    let provider = new firebase.auth.GithubAuthProvider();
    return new Promise<any>((resolve, reject ) => {
      this.authService.signInWithPopup(provider)
        .then(data => {
          this.setAuth(true);
          resolve(data);
        })
        .catch(error => reject(error));
    });
  }

  logout(): void {
    this.authService.signOut().then(r => this.setAuth(false));
  }
}
