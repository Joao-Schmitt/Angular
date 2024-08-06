import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTextboxComponent } from './gear-textbox.component';

describe('gear-text-box', () => {
  let component: GearTextboxComponent;
  let fixture: ComponentFixture<GearTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearTextboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
