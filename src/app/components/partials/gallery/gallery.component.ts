import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any; // Declare Swiper from global scope
declare var AOS: any; 

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit {
  images = [
    'img/gallery/gallery-1.jpg',
    'img/gallery/gallery-2.jpg',
    'img/gallery/gallery-3.jpg',
    'img/gallery/gallery-4.jpg',
    'img/gallery/gallery-5.jpg',
    'img/gallery/gallery-6.jpg',
    'img/gallery/gallery-7.jpg',
    'img/gallery/gallery-8.jpg'
  ];

  // ngAfterViewInit(): void {
  //   new Swiper('.swiper', {
  //     loop: true,
  //     speed: 600,
  //     autoplay: {
  //       delay: 5000
  //     },
  //     slidesPerView: 'auto',
  //     centeredSlides: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true
  //     },
  //     breakpoints: {
  //       320: { slidesPerView: 1, spaceBetween: 0 },
  //       768: { slidesPerView: 3, spaceBetween: 20 },
  //       1200: { slidesPerView: 5, spaceBetween: 20 }
  //     }
  //   });
  // }
  ngAfterViewInit(): void {
    // Check if code is running on the client side (browser)
    if (typeof document !== 'undefined') {
      // Initialize Swiper (only on client-side)
      if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 20 }
          }
        });
      }

      // Initialize AOS animations (only on client-side)
      if (typeof AOS !== 'undefined') {
        AOS.init();
      }
    }
  }
}
