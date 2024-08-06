import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearMenuButtonComponent } from './gear-menu-button.component';

describe('GearMenuButtonComponent', () => {
  let component: GearMenuButtonComponent;
  let fixture: ComponentFixture<GearMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearMenuButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
