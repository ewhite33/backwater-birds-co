import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShoppingCartDrawerComponent } from './feature-shopping-cart-drawer.component';

describe('FeatureShoppingCartDrawerComponent', () => {
  let component: FeatureShoppingCartDrawerComponent;
  let fixture: ComponentFixture<FeatureShoppingCartDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShoppingCartDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShoppingCartDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
