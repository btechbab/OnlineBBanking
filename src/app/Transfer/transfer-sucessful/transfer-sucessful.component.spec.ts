import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSucessfulComponent } from './transfer-sucessful.component';

describe('TransferSucessfulComponent', () => {
  let component: TransferSucessfulComponent;
  let fixture: ComponentFixture<TransferSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
