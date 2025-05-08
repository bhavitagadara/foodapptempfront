import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})
export class StarterComponent {
  title = 'Starter Page';
  sectionTitle = 'Starter Section';
  subtitle = 'Section Title';
  description = 'Direda Flowed';
  content = 'Use this page as a starter for your own custom pages.';
}
