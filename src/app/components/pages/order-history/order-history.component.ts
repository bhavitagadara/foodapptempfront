import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../partials/header/header.component";
import { FooterComponent } from "../../partials/footer/footer.component";


interface Order {
  _id: string;
  createdAt: string;
  items: { name: string; price: number; quantity: number }[];
  totalAmount: number;
  paymentStatus: string;
  isSubscription: boolean;
}

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {

  orders: any[] = [];
  userEmail: string = '';

  constructor(private orderService: AuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.email) {
      this.userEmail = user.email;
      this.fetchOrders();
    }
  }

  fetchOrders() {
    this.orderService.getOrderHistoryByEmail(this.userEmail).subscribe({
      next: (response) => {
        this.orders = response;
        console.log("Fetched Orders:", this.orders);
      },
      error: (err) => {
        console.error("Error fetching order history:", err);
      }
    });
  }
  
  cancelOrder(orderId: string) {
    if (confirm("Are you sure you want to cancel this order?")) {
      this.orderService.cancelOrder(orderId).subscribe({
        next: (response) => {
          alert(response.message);
          this.fetchOrders();
        },
        error: (err) => {
          console.error("Error canceling order:", err);
          alert("Failed to cancel order. Please try again.");
        }
      });
    }
  }

  cancelSubscription(orderId: string) {
    if (confirm("Are you sure you want to cancel this subscription?")) {
      this.orderService.cancelSubscription(orderId).subscribe({
        next: (response) => {
          alert(response.message);
          this.fetchOrders(); // Refresh orders after cancellation
        },
        error: (err) => {
          console.error("Error canceling subscription:", err);
          alert("Failed to cancel subscription. Please try again.");
        }
      });
    }
  }
  
  
  isOrderFromToday(orderDate: string): boolean {
    const order = new Date(orderDate);
    const today = new Date();
    return (
      order.getFullYear() === today.getFullYear() &&
      order.getMonth() === today.getMonth() &&
      order.getDate() === today.getDate()
    );
  }
}
