import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearGridComponent } from './gear-grid.component';

describe('GearGridComponent', () => {
  let component: GearGridComponent;
  let fixture: ComponentFixture<GearGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
