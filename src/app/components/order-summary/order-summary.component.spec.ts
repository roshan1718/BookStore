import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
