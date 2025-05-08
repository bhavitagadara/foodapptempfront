import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { FooterComponent } from "../../partials/footer/footer.component";
import { HeaderComponent } from "../../partials/header/header.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface FoodItem {
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}