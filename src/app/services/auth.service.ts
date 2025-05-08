import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'http://localhost:9000';
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  
  googleLogin(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google-login`, { token });
  }

  
  placeOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/placeorder`, order);
  }

  getOrderHistoryByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/orderhistory/${email}`);
  }

  cancelOrder(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/${orderId}/cancel`, {});
  }

  cancelSubscription(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscriptions/${orderId}/cancel`, {});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Or check sessionStorage if you're using it
  }
}
