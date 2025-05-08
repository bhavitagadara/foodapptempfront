import { Routes } from '@angular/router';
import { LayoutComponent } from './components/partials/layout/layout.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/partials/home/home.component';
import { AboutComponent } from './components/partials/about/about.component';
import { EventsComponent } from './components/partials/events/events.component';
import { ChefsComponent } from './components/partials/chefs/chefs.component';
import { BookTableComponent } from './components/partials/book-table/book-table.component';
import { GalleryComponent } from './components/partials/gallery/gallery.component';
import { ContactComponent } from './components/partials/contact/contact.component';
import { FoodDetailsComponent } from './components/pages/food-detail/food-detail.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { OrderHistoryComponent } from './components/pages/order-history/order-history.component';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { PaymentSuccessComponent } from './components/pages/payment-success/payment-success.component';

export const routes: Routes = [
   { path: 'food/:name', component: FoodDetailsComponent },
   { path: 'cart', component: CartComponent},
   { path: 'checkout', component: CheckoutComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   { path: 'profile', component: ProfileComponent},
   { path: 'order-history', component: OrderHistoryComponent },
   { path: 'payment', component: PaymentComponent },
   { path: 'payment-success', component: PaymentSuccessComponent},
    {
        path: '',
        component: LayoutComponent, 
        children: [
          { path: '', component: HeaderComponent },
          { path: 'hero', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'menu', component: AboutComponent },
          { path: 'events', component: EventsComponent },
          { path: 'chefs', component: ChefsComponent },
          { path: 'book-a-table', component: BookTableComponent },
          { path: 'gallery', component: GalleryComponent },
          { path: 'contact', component: ContactComponent },
          { path: '', component: FooterComponent },
        ]
      },
];
