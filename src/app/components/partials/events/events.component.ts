import { CommonModule } from '@angular/common';
import { Component ,AfterViewInit } from '@angular/core';

declare var Swiper: any; 

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})

export class EventsComponent implements AfterViewInit {
  events = [
    {
      title: 'Custom Parties',
      price: '$99',
      description: 'Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.',
      image: 'img/events-1.jpg'
    },
    {
      title: 'Private Parties',
      price: '$289',
      description: 'In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.',
      image: 'img/events-2.jpg'
    },
    {
      title: 'Birthday Parties',
      price: '$499',
      description: 'Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.',
      image: 'img/events-3.jpg'
    },
    {
      title: 'Wedding Parties',
      price: '$899',
      description: 'Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.',
      image: 'img/events-4.jpg'
    }
  ];

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 1
        }
      }
    });
  }
}
