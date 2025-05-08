import { Food } from './src/app/shared/models/food';
import { Tag } from './src/app/shared/models/tag';

export const sample_foods : Food[] =[
  {
    id: '1',
    name: 'Magnam Tiste',
    imageUrl: 'img/menu/menu-item-1.png',
    ingredients: 'Lorem, deren, trataro, filede, nerada', // ✅ Now valid
    price: 5.95,
    favorite: false,
    stars: 4,
    origins: ['Italy'],
    tags: ['Pizza'],
    cookTime: '30'
  },
  {
    id: '2',
    name: 'Aut Luia',
    imageUrl: 'img/menu/menu-item-2.png',
    ingredients: 'Lorem, deren, trataro, filede, nerada', // ✅ Now valid
    price: 14.95,
    favorite: false,
    stars: 5,
    origins: ['France'],
    tags: ['Burger'],
    cookTime: '25'
  }
    ]

    export const sample_tags:Tag[] = [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    
]