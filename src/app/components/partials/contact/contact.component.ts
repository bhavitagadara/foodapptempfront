import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  contactInfo = [
    { icon: 'bi bi-geo-alt', title: 'Address', detail: 'A108 Adam Street, New York, NY 535022', delay: 200 },
    { icon: 'bi bi-telephone', title: 'Call Us', detail: '+1 5589 55488 55', delay: 300 },
    { icon: 'bi bi-envelope', title: 'Email Us', detail: 'info@example.com', delay: 400 },
    { icon: 'bi bi-clock', title: 'Opening Hours', detail: 'Mon-Sat: 11AM - 23PM; Sunday: Closed', delay: 500 }
  ];

  onSubmit() {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    setTimeout(() => {
      this.isLoading = false;
      this.successMessage = 'Your message has been sent. Thank you!';
    }, 2000);
  }
}
