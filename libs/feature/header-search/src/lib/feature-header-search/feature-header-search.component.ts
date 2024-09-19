import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'lib-feature-header-search',
  templateUrl: './feature-header-search.component.html',
  styleUrls: ['./feature-header-search.component.scss'],
})
export class FeatureHeaderSearchComponent {
  searchControl = new FormControl('');
  options: string[] = ['Option 1', 'Option 2', 'Option 3']; // Sample options
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
