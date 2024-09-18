import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'], // Use 'styleUrls' instead of 'styleUrl'
})
export class FeatureHeaderComponent {
  @ViewChild('drawerDiv') drawerDiv!: ElementRef;
  drawerOpen = false; // Track whether the drawer is open

  openDrawer() {
    this.drawerDiv.nativeElement.style.display = 'flex'; // Show the drawer when hovered
    this.drawerOpen = true; // Mark the drawer as open
  }

  closeDrawer() {
    this.drawerDiv.nativeElement.style.display = 'none'; // Hide the drawer when not hovered
    this.drawerOpen = false; // Mark the drawer as closed
  }
}
