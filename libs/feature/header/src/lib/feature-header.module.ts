import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { FeatureHeaderDrawerModule } from '@backwater-birds-co-app/feature/header-drawer';
import { FeatureShoppingCartDrawerModule } from '@backwater-birds-co-app/feature/shopping-cart-drawer';

@NgModule({
  declarations: [FeatureHeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, FeatureShoppingCartDrawerModule, FeatureHeaderDrawerModule],
  exports: [FeatureHeaderComponent]
})
export class FeatureHeaderModule {}
