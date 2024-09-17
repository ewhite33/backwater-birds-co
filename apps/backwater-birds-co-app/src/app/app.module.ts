import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the main app component
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, // Declare your main app component
    // Add other components here as needed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import the routing module
    // Import other Angular modules here as needed
  ],
  providers: [], // Add any services or providers
  bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule {}
