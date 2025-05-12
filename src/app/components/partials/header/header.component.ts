import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

declare let AOS: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
// export class HeaderComponent {
//   isMenuOpen = false;

//   constructor(private router: Router) {}

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   navigateToCart() {
//     console.log("Navigating to cart...");
//     this.router.navigate(['/cart']).then(success => {
//       if (success) {
//         console.log("Navigation to cart successful!");
//       } else {
//         console.error("Navigation to cart failed!");
//       }
//     });
//   }

//   navigateToHome() {
//     this.router.navigate(['/']).then(() => {
//       window.location.reload(); // Force reload to refresh components
//     });
//   }

//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }


// }
export class HeaderComponent implements OnInit,AfterViewInit {
  isMenuOpen = false;
  userName: string | null = null;
  isBrowser!: boolean;

  // constructor(private router: Router) {}

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.loadUser(); // Only load the user from localStorage in the browser
    }
  }

  
  ngAfterViewInit() {
    // Only initialize AOS in the browser after the view is initialized
    if (this.isBrowser) {
      this.loadAOS(); // Ensure AOS is only initialized in the browser
    }
  }

  loadUser() {
    if (this.isBrowser) {
      const user = localStorage.getItem('user');
      if (user) {
        this.userName = JSON.parse(user).name; // Get the user's name
      }
    }
  }

  loadAOS() {
    if (this.isBrowser) {
      import('aos').then((AOSModule) => {
        AOSModule.default.init({
          duration: 1200,
          easing: 'ease-in-out',
        });
      }).catch((error) => {
        console.error('Failed to load AOS:', error);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload(); // Force reload to refresh components
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // logout() {
  //   localStorage.removeItem('user'); // Remove user from storage
  //   this.userName = null;
  //   this.router.navigate(['/login']); // Redirect to login page
  // }

  navigateToProfile() {
    this.router.navigate(['/profile']); // Navigate to profile page
  }
}