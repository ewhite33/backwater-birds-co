import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'lib-feature-shopping-cart-drawer',
  templateUrl: './feature-shopping-cart-drawer.component.html',
  styleUrls: ['./feature-shopping-cart-drawer.component.scss'],
})
export class FeatureShoppingCartDrawerComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  onBackdropClick() {
    this.closeDrawer();
  }
}
