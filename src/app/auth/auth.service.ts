import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5135/api/auth/login';
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(this.apiUrl, { username, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('refreshToken', response.refreshToken);
          localStorage.setItem('expiration', response.expiration);
          this.authStatus.next(true);
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    if (!token || !expiration) return false;

    const isExpired = new Date(expiration).getTime() < new Date().getTime();
    return !isExpired;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}
