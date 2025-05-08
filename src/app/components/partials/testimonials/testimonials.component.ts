import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit {
  testimonials = [
    {
      name: 'Saul Goodman',
      role: 'CEO & Founder',
      text: 'Proin iaculis purus consequat sem cure digni ssim...',
      image: 'img/testimonials/testimonials-1.jpg'
    },
    {
      name: 'Sara Wilsson',
      role: 'Designer',
      text: 'Export tempor illum tamen malis malis eram quae irure...',
      image: 'img/testimonials/testimonials-2.jpg'
    },
    {
      name: 'Jena Karlis',
      role: 'Store Owner',
      text: 'Enim nisi quem export duis labore cillum quae magna...',
      image: 'img/testimonials/testimonials-3.jpg'
    },
    {
      name: 'John Larson',
      role: 'Entrepreneur',
      text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa...',
      image: 'img/testimonials/testimonials-4.jpg'
    }
  ];

  ngAfterViewInit(): void {
    const swiperOptions: any = {
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    };

    // Enable loop only if there are enough slides
    if (this.testimonials.length > 1) {
      swiperOptions.loop = true;
    }

    new Swiper('.mySwiper', swiperOptions);
  }

}