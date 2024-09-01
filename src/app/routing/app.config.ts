import { provideRouter } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers : [
        provideRouter(routes),  // Provide the routes defined in app.routes.ts
        provideHttpClient(),  // Provide the HttpClient service
    ],
}


