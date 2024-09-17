import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Point to the new AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
