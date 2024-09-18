import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'], // Use 'styleUrls' instead of 'styleUrl'
})
export class FeatureHeaderComponent {
  @ViewChild('drawerDiv') drawerDiv!: ElementRef;
  drawerOpen = false; // Track whether the drawer is open

  // Define routes array with path and label
  routes = [
    { path: './logo-gear', label: 'Logo Gear' },
    { path: './hunt-dog', label: 'Hunt Dog' },
    { path: './decoys', label: 'Decoys' },
    { path: './blinds', label: 'Blinds' },
    { path: './bags', label: 'Bags' },
    { path: './accessories', label: 'Accessories' }
  ];

  constructor() {}

  openDrawer() {
    this.drawerDiv.nativeElement.style.display = 'flex'; // Show the drawer when hovered
    this.drawerOpen = true; // Mark the drawer as open
  }

  closeDrawer() {
    this.drawerDiv.nativeElement.style.display = 'none'; // Hide the drawer when not hovered
    this.drawerOpen = false; // Mark the drawer as closed
  }
}
