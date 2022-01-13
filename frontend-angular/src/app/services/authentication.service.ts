import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  isLoggedIn(): BehaviorSubject<boolean> {
    if (localStorage.getItem("username") != null) {
      this.logIn();
    }
    return this.loggedIn;
  }

  logIn() {
    this.loggedIn.next(true);
  }

  logOut() {
    this.loggedIn.next(false);
  }
}
