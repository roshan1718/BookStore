import { TestBed } from '@angular/core/testing';

import { CartOrderSummaryService } from './cart-order-summary.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartOrderSummaryService', () => {
  let service: CartOrderSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartOrderSummaryService]
    });
    service = TestBed.inject(CartOrderSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getBooksFromCart function', () => {
    expect(service.getBooksFromCart).toBeTruthy();
  });

  it('check getBooksFromCart function not null', () => {
    expect(service.getBooksFromCart(Array)).not.toBeNull();
  });

  it('should have getTotalPrice function', () => {
    expect(service.getTotalPrice).toBeTruthy();
  });

  it('check getTotalPrice function not null', () => {
    expect(service.getTotalPrice(Number)).not.toBeNull();
  });

  it('should have getTotalQuantity function', () => {
    expect(service.getTotalQuantity).toBeTruthy();
  });

  it('check getTotalQuantity function not null', () => {
    expect(service.getTotalQuantity(Number)).not.toBeNull();
  });
});
