import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init();  // ✅ Initialize AOS after the view loads
  }
}
