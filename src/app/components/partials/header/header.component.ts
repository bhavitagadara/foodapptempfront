import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
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
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  userName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.userName = JSON.parse(user).name; // Get the user's name
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