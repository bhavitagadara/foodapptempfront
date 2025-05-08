import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { WhyUsComponent } from "../why-us/why-us.component";
import { StatsComponent } from '../stats/stats.component';
import { MenuComponent } from "../menu/menu.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { EventsComponent } from "../events/events.component";
import { ChefsComponent } from "../chefs/chefs.component";
import { BookTableComponent } from "../book-table/book-table.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, WhyUsComponent, StatsComponent, MenuComponent, TestimonialsComponent, EventsComponent, ChefsComponent, BookTableComponent, GalleryComponent, ContactComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
