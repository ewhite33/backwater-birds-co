import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureHeaderDrawerComponent } from './feature-header-drawer.component';

describe('FeatureHeaderDrawerComponent', () => {
  let component: FeatureHeaderDrawerComponent;
  let fixture: ComponentFixture<FeatureHeaderDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHeaderDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureHeaderDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
