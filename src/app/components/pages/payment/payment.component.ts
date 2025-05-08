import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../partials/header/header.component";
import { FoodDetailsComponent } from "../food-detail/food-detail.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { SubscriptionComponent } from "../../partials/subscription/subscription.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  order: any = {};

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit() {
    const storedOrder = localStorage.getItem('orderData');
    if (storedOrder) {
      this.order = JSON.parse(storedOrder);

      // Ensure totalAmount is correctly calculated
      this.order.totalAmount = this.calculateTotalAmount();
      console.log("Updated Order Data:", this.order);
      
    } else {
      this.router.navigate(['/checkout']); // Redirect if no order data
    }
  }

  calculateTotalAmount(): number {
    if (!this.order.items || !Array.isArray(this.order.items)) {
      return 0;
    }
  
    return this.order.items.reduce((sum: number, item: any) => {
      // Remove dollar sign and convert to number
      const price = Number(item.price.replace(/[^0-9.]/g, '')) || 0;
      const quantity = Number(item.quantity) || 1;
  
      return sum + (price * quantity);
    }, 0);
  }
  

  payNow() {
    console.log("Order data before sending to backend:", this.order);

    if (isNaN(this.order.totalAmount) || this.order.totalAmount <= 0) {
      console.error("Total amount is invalid. Cannot proceed with payment.");
      return;
    }

    this.paymentService.createPaymentSession(this.order).subscribe({
      next: (response: any) => {
        console.log("Redirecting to Stripe:", response.url);
        window.location.href = response.url;
      },
      error: (err) => console.error("Payment failed:", err),
    });
  }
}
