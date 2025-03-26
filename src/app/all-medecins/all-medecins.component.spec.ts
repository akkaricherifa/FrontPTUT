import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMedecinsComponent } from './all-medecins.component';

describe('AllMedecinsComponent', () => {
  let component: AllMedecinsComponent;
  let fixture: ComponentFixture<AllMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMedecinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
