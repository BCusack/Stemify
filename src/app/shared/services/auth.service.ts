import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import auth from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        const localUser = localStorage.getItem('user');
        if (localUser != null) {
          JSON.parse(localUser);
        }

      } else {
        localStorage.setItem('user', '');
        const localUser = localStorage.getItem('user');
        if (localUser != null) {
          JSON.parse(localUser);
        }
      }
    })
  }

  // Sign in with email/password
  async SignIn(email: string, password: any) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async SignUp(email: string, password: any) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user?.sendEmailVerification();
      }).catch((error) => {
        window.alert(error.message);
      });
  }



  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: any) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const localUser = localStorage.getItem('user');
    if (localUser != null) {
      const user = JSON.parse(localUser);
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
    return (false);
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
