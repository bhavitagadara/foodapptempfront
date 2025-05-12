import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent implements OnInit{
  // ngOnInit(): void {
  //   AOS.init(); // Initialize AOS animations
  // }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Safe browser-only usage
    }
  }
}
