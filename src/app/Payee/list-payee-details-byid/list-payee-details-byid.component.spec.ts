import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayeeDetailsByidComponent } from './list-payee-details-byid.component';

describe('ListPayeeDetailsByidComponent', () => {
  let component: ListPayeeDetailsByidComponent;
  let fixture: ComponentFixture<ListPayeeDetailsByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPayeeDetailsByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPayeeDetailsByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
