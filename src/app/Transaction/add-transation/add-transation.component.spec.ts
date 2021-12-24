import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransationComponent } from './add-transation.component';

describe('AddTransationComponent', () => {
  let component: AddTransationComponent;
  let fixture: ComponentFixture<AddTransationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
