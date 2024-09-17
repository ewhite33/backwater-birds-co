import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAccountComponent } from './feature-account.component';

describe('FeatureAccountComponent', () => {
  let component: FeatureAccountComponent;
  let fixture: ComponentFixture<FeatureAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
