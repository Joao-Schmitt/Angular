import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearMsgComponent } from './gear-msg.component';

describe('GearMsgComponent', () => {
  let component: GearMsgComponent;
  let fixture: ComponentFixture<GearMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
