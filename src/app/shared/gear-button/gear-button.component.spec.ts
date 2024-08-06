import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearButtonComponent } from './gear-button.component';

describe('GearButtonComponent', () => {
  let component: GearButtonComponent;
  let fixture: ComponentFixture<GearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
