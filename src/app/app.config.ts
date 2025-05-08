import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch()),provideAnimations(),  provideToastr({ timeOut: 3000, positionClass: 'toast-bottom-right', newestOnTop: false }),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, // Don't auto-login
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('910194366309-c0e5rkrc7vdb7atfnt47gg0inbo3jovo.apps.googleusercontent.com'), // Replace with your Google Client ID
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
};
