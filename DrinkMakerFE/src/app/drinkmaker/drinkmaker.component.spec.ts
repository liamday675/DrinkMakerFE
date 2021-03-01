import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkmakerComponent } from './drinkmaker.component';

describe('DrinkmakerComponent', () => {
  let component: DrinkmakerComponent;
  let fixture: ComponentFixture<DrinkmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkmakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
