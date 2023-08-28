import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegData } from 'src/app/model/regdata';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  isLoggedIn() {
    return (
      localStorage.getItem('currentUserName') !== null &&
      localStorage.getItem('currentUserEmail') !== null
    );
  }
  login(regData: RegData) {
    console.log(this.router);
    localStorage.setItem('currentUserName', regData.username);
    localStorage.setItem('currentUserEmail', regData.email);
    this.router.navigateByUrl('');
  }
  logout() {
    console.log('logout');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserEmail');
    this.router.navigateByUrl('login');
  }
  getUserName() {
    return localStorage.getItem('currentUserName');
  }
}
