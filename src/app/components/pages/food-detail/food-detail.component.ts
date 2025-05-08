import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../partials/header/header.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { SubscriptionComponent } from "../../partials/subscription/subscription.component";


interface MenuItem {
  name: string;
  image: string;
  ingredients: string;
  price: string;
}


@Component({
  selector: 'app-food-detail',
  standalone:true,
  imports: [HeaderComponent, FooterComponent, CommonModule, SubscriptionComponent],
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})

export class FoodDetailsComponent implements OnInit {
  food: MenuItem | undefined;
  cart: MenuItem[] = [];

  // Dummy menu items (this should be fetched from a service in a real app)
  menuItems: MenuItem[] = [
    { name: 'Magnam Tiste', image: 'http://localhost:4200/img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
    { name: 'Aut Luia', image: 'http://localhost:4200/img/menu/menu-item-2.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
    { name: 'Est Eligendi', image: 'http://localhost:4200/img/menu/menu-item-3.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
    { name: 'Eos Luibusdam', image: 'http://localhost:4200/img/menu/menu-item-4.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
    { name: 'Laboriosam Direva', image: 'http://localhost:4200/img/menu/menu-item-6.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' }
  ];

  constructor(private route: ActivatedRoute , private cartService:CartService , private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const foodName = params.get('name');
      this.food = this.menuItems.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === foodName);
    });

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  addToCart(): void {
    if (this.food) {
      this.cartService.addToCart(this.food);
      this.router.navigate(['/cart']); // Redirect to cart page after adding
    }
  }
  
}
