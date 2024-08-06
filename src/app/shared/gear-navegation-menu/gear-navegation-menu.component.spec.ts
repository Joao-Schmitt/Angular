import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearNavegationMenuComponent } from './gear-navegation-menu.component';

describe('GearNavegationMenuComponent', () => {
  let component: GearNavegationMenuComponent;
  let fixture: ComponentFixture<GearNavegationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearNavegationMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearNavegationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
