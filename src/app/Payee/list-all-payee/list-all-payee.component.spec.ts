import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPayeeComponent } from './list-all-payee.component';

describe('ListAllPayeeComponent', () => {
  let component: ListAllPayeeComponent;
  let fixture: ComponentFixture<ListAllPayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllPayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
