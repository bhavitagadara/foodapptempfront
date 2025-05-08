import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../partials/header/header.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  userEmail: string = '';

  constructor(
    private cartService: CartService, 
    private orderService: AuthService, 
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.email) {
      this.userEmail = user.email;
    }
    this.cartItems = this.cartService.getCart();
    
    console.log("Cart Items:", this.cartItems); // Debugging step
    
    this.calculateTotalPrice();
    console.log("Total Price after calculation:", this.totalPrice); // Debugging step
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => {
        const itemPrice = Number(item.price) || 0;
        const itemQuantity = Number(item.quantity) || 1;
        return sum + itemPrice * itemQuantity;
    }, 0);
}

  placeOrder() {
    this.calculateTotalPrice();
    console.log("Final Order Data:", {
      email: this.userEmail,
      items: this.cartItems,
      totalAmount: this.totalPrice,
    });

    localStorage.setItem("orderData", JSON.stringify({
      email: this.userEmail,
      items: this.cartItems,
      totalAmount: this.totalPrice,
    }));

    this.router.navigate(["/payment"]);
}

  
}
