import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

declare const google: any;

declare global {
  interface Window {
    handleCredentialResponse: (response: any) => void;
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    window['handleCredentialResponse'] = this.handleCredentialResponse.bind(this);
  }

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response.user));
        this.toastr.success('Login Successful!', 'Success');
        this.router.navigate(['/']);
      },
      error: () => {
        this.toastr.error('Invalid Credentials!', 'Error');
      }
    });
  }

  handleCredentialResponse(response: any) {
    console.log('Received Google Token:', response.credential);

    this.authService.googleLogin(response.credential).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.toastr.success('Google Login Successful!', 'Success');
        this.router.navigate(['/']);
      },
      error: () => {
        this.toastr.error('Google Login Failed!', 'Error');
      }
    });
  }
}
