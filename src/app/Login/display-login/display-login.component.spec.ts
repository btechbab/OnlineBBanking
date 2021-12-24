import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLoginComponent } from './display-login.component';

describe('DisplayLoginComponent', () => {
  let component: DisplayLoginComponent;
  let fixture: ComponentFixture<DisplayLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
