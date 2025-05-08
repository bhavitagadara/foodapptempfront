import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart(); // Load cart from localStorage when service initializes
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  getCart() {
    return [...this.cart]; // Return a copy to prevent accidental modifications
  }

  addToCart(food: any) {
    const existingItem = this.cart.find(item => item.name === food.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...food, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
