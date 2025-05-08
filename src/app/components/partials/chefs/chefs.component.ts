import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
  chefs = [
    {
      name: 'Walter White',
      role: 'Master Chef',
      description: 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.',
      image: 'img/chefs/chefs-1.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Jhonson',
      role: 'Patissier',
      description: 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.',
      image: 'img/chefs/chefs-2.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'William Anderson',
      role: 'Cook',
      description: 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.',
      image: 'img/chefs/chefs-3.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];
}
