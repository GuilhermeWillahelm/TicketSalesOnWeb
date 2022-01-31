import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuticketComponent } from './menuticket.component';

describe('MenuticketComponent', () => {
  let component: MenuticketComponent;
  let fixture: ComponentFixture<MenuticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
