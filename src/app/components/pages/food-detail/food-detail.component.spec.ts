import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailComponent } from './food-detail.component';

describe('FoodDetailComponent', () => {
  let component: FoodDetailComponent;
  let fixture: ComponentFixture<FoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
