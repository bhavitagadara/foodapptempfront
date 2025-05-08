import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.toastr.success('Registration Successful!', 'Success'); // Toastr message
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      error: (error) => {
        console.error('Registration error:', error);
        this.toastr.error('Registration Failed! Try again.', 'Error'); // Toastr error message
      }
    });
  }

  iflogin() {
    this.router.navigate(['/login']);
  }
}
