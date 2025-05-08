import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  bookingForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      people: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookingForm.valid) {
      console.log('Booking Data:', this.bookingForm.value);
      this.successMessage = 'Your booking request was sent. We will contact you shortly!';
      this.errorMessage = '';
      this.bookingForm.reset();
      this.submitted = false;
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.successMessage = '';
    }
  }
}
