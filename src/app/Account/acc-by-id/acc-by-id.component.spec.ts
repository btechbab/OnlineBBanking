import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccByIdComponent } from './acc-by-id.component';

describe('AccByIdComponent', () => {
  let component: AccByIdComponent;
  let fixture: ComponentFixture<AccByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
