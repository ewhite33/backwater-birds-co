import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';

@NgModule({
  declarations: [FeatureHeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [FeatureHeaderComponent]
})
export class FeatureHeaderModule {}
