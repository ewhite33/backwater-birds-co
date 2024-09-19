import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { FeatureHeaderSearchComponent } from './feature-header-search/feature-header-search.component';

@NgModule({
  declarations: [FeatureHeaderSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // For FormControl usage
    MatFormFieldModule, // For form fields
    MatInputModule, // For input elements
    MatAutocompleteModule, // For autocomplete functionality
    MatIconModule, // For using icons in inputs
    MatOptionModule, // For mat-option within mat-autocomplete
  ],
  exports: [FeatureHeaderSearchComponent],
})
export class FeatureHeaderSearchModule {}
