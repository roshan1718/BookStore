import { TestBed } from '@angular/core/testing';

import { CartPlaceOrderService } from './cart-place-order.service';

describe('CartPlaceOrderService', () => {
  let service: CartPlaceOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPlaceOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
