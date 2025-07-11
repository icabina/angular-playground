import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
});

// -------------------------------------------------------------
// Angular’s HttpClient uses XMLHttpRequest (XHR) by default.
// But Fetch API is more modern and works better with:

// SSR (Node.js environments)
// Interceptors
// Streaming
// Future Angular optimizations
// -------------------------------------------------------------
// 🔧 What does withFetch() do?
// It tells Angular:
// “Use the Fetch API under the hood for all HTTP requests.”

// This improves:
// SSR compatibility
// Streaming responses
// Performance
// Future deprecation safety
// -------------------------------------------------------------
