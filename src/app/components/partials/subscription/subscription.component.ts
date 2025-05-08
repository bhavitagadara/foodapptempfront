import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})

export class SubscriptionComponent {
  constructor(private subscriptionService: PaymentService) {}

  subscribe() {
    this.subscriptionService.createCheckoutSession().subscribe({
      next: (response) => {
        if (response.url) {
          window.location.href = response.url; // Redirect to Stripe checkout page
        }
      },
      error: (err) => {
        console.error("Subscription Error:", err);
      }
    });
  }
}

