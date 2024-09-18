import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';

@NgModule({
  declarations: [FeatureHeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [FeatureHeaderComponent]
})
export class FeatureHeaderModule {}
