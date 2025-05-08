import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent implements OnInit{
  ngOnInit(): void {
    AOS.init(); // Initialize AOS animations
  }
}
