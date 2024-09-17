import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FeatureAccountComponent } from './feature-account/feature-account.component';

@NgModule({
  declarations: [FeatureAccountComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [FeatureAccountComponent]
})
export class FeatureAccountModule {}
