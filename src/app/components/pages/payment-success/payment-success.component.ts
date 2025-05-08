import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent implements OnInit{

  transactionId: string = '';

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['session_id']) {
        this.transactionId = params['session_id'];
        this.storeOrderDetails();
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  
  
  storeOrderDetails() {
    const orderData = JSON.parse(localStorage.getItem('orderData') || '{}');

    // const paymentData = {
    //   ...orderData,
    //   transactionId: this.transactionId,
    //   status: 'Paid',
    // };

    const paymentData = {
      session_id: this.transactionId, // Send session_id instead of transactionId
      items: orderData.items || [], // Ensure items are sent
    };
    
    this.paymentService.saveOrder(paymentData).subscribe({
      next: () => {
        this.toastr.success("Payment successful! Order stored.", "Success");
        localStorage.removeItem('orderData');
        this.router.navigate(['/order-history']);
      },
      error: (err) => console.error("Failed to save order:", err),
    });
  }

  
}
