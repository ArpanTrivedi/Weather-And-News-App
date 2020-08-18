import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth:AngularFireAuth) { }

  SignUp(email,password) {
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  SignIn(email,password) {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  SignInGoogle(provider) {
    return this.auth.signInWithPopup(provider);
  }

  logOut(){
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.authState;
  }

}
