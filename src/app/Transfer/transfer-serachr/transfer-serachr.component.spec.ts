import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSerachrComponent } from './transfer-serachr.component';

describe('TransferSerachrComponent', () => {
  let component: TransferSerachrComponent;
  let fixture: ComponentFixture<TransferSerachrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferSerachrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSerachrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
