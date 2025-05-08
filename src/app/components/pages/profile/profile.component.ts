import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../partials/header/header.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  viewOrderHistory() {
    this.router.navigate(['/order-history']); // Redirect to Order History page
  }

  logout() {
    localStorage.removeItem('user'); // Remove user from local storage
    this.toastr.info('You have been logged out.', 'Logout'); // Show Toastr message
    this.router.navigate(['/']);
  }
}
