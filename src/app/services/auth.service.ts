import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  baseUrl: string = 'http://localhost:8082/api'

  // hit the backend to login
  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' })
  }

  // method to check if the user is still logged in
  isLoggedIn() {
    return this.getToken() != null
  }

  // method to get token from local storage
  getToken() {
    return localStorage.getItem("token");
  }

  // method to set to session, by storing token in local storage
  setSession(token: string) {
    localStorage.setItem('token', token);
    console.log("token is: ");
    console.log(localStorage.getItem("token"));
  }

  logout() {
    localStorage.removeItem('token');
    console.log("token is: ");
    console.log(localStorage.getItem("token"));
    this.router.navigateByUrl("login");
  }
}
