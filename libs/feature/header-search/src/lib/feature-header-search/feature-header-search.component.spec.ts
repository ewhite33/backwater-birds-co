import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureHeaderSearchComponent } from './feature-header-search.component';

describe('FeatureHeaderSearchComponent', () => {
  let component: FeatureHeaderSearchComponent;
  let fixture: ComponentFixture<FeatureHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHeaderSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
