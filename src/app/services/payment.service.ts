import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  createPaymentSession(order: any) {
    return this.http.post(`${this.apiUrl}/create-payment-session`, order);
  }

  saveOrder(paymentData: any) {
    return this.http.post(`${this.apiUrl}/orders`, paymentData);
  }

  createCheckoutSession(): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscribe`, {});
  }
}
