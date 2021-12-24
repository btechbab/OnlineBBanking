import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTransferComponent } from './list-all-transfer.component';

describe('ListAllTransferComponent', () => {
  let component: ListAllTransferComponent;
  let fixture: ComponentFixture<ListAllTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
