import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeatureHeaderDrawerComponent } from './feature-header-drawer/feature-header-drawer.component';

@NgModule({
  declarations: [FeatureHeaderDrawerComponent],
  imports: [CommonModule, RouterModule, MatIconModule, MatSidenavModule],
  exports: [FeatureHeaderDrawerComponent]
})
export class FeatureHeaderDrawerModule {}
