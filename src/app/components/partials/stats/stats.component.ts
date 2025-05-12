import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports:[],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements AfterViewInit {

  // constructor(private renderer: Renderer2) {}

  // ngAfterViewInit(): void {
  //   // Load purecounter script dynamically
  //   const script = this.renderer.createElement('script');
  //   script.src = 'vendor/purecounter/purecounter_vanilla.js';
  //   script.onload = () => {
  //     // Initialize PureCounter after script is loaded
  //     new (window as any).PureCounter();
  //   };
  //   document.body.appendChild(script);
  // }

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Load purecounter script dynamically
      const script = this.renderer.createElement('script');
      script.src = 'vendor/purecounter/purecounter_vanilla.js';
      script.onload = () => {
        // Initialize PureCounter after script is loaded
        new (window as any).PureCounter();
      };
      document.body.appendChild(script);
    }
  }
}



