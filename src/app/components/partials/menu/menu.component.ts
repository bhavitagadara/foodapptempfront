import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  name: string;
  image: string;
  ingredients: string;
  price: string;
}


interface MenuCategory {
  title: string;
  id: string;
  items: MenuItem[];
}


@Component({
  selector: 'app-menu',
  standalone:true,
  imports:[CommonModule, CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuCategories: MenuCategory[] = [
    {
      title: 'Starters',
      id: 'menu-starters',
      items: [
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
        { name: 'Aut Luia', image: 'img/menu/menu-item-2.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
        { name: 'Est Eligendi', image: 'img/menu/menu-item-3.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
        { name: 'Eos Luibusdam', image: 'img/menu/menu-item-4.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
        { name: 'Laboriosam Direva', image: 'img/menu/menu-item-6.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
      ]
    },
    {
      title: 'Breakfast',
      id: 'menu-breakfast',
      items: [
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
        { name: 'Aut Luia', image: 'img/menu/menu-item-2.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
        { name: 'Est Eligendi', image: 'img/menu/menu-item-3.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
        { name: 'Eos Luibusdam', image: 'img/menu/menu-item-4.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
        { name: 'Laboriosam Direva', image: 'img/menu/menu-item-6.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
      ]
    },
    {
      title: 'Lunch',
      id: 'menu-lunch',
      items: [
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
        { name: 'Aut Luia', image: 'img/menu/menu-item-2.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
        { name: 'Est Eligendi', image: 'img/menu/menu-item-3.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
        { name: 'Eos Luibusdam', image: 'img/menu/menu-item-4.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
        { name: 'Laboriosam Direva', image: 'img/menu/menu-item-6.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
      ]
    },
    {
      title: 'Dinner',
      id: 'menu-dinner',
      items: [
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
        { name: 'Aut Luia', image: 'img/menu/menu-item-2.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
        { name: 'Est Eligendi', image: 'img/menu/menu-item-3.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
        { name: 'Eos Luibusdam', image: 'img/menu/menu-item-4.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
        { name: 'Laboriosam Direva', image: 'img/menu/menu-item-6.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
        { name: 'Magnam Tiste', image: 'img/menu/menu-item-1.png', ingredients: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
      ]
    }
  ];
  // Function to generate a slug-friendly URL
  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
