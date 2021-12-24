import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAccDetailsComponent } from './list-all-acc-details.component';

describe('ListAllAccDetailsComponent', () => {
  let component: ListAllAccDetailsComponent;
  let fixture: ComponentFixture<ListAllAccDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAccDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAccDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
