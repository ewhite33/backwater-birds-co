import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeatureHeaderDrawerComponent } from './feature-header-drawer/feature-header-drawer.component';

@NgModule({
  declarations: [FeatureHeaderDrawerComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [FeatureHeaderDrawerComponent]
})
export class FeatureHeaderDrawerModule {}
