import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbillsComponent } from './allbills.component';

describe('AllbillsComponent', () => {
  let component: AllbillsComponent;
  let fixture: ComponentFixture<AllbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllbillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
