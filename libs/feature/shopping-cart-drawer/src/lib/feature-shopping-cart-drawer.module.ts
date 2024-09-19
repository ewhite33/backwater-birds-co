import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeatureShoppingCartDrawerComponent } from './feature-shopping-cart-drawer/feature-shopping-cart-drawer.component';

@NgModule({
  declarations: [FeatureShoppingCartDrawerComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [FeatureShoppingCartDrawerComponent]
})
export class FeatureShoppingCartDrawerModule {}
