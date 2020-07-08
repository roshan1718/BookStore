import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddToWishlistService } from './add-to-wishlist.service';

describe('AddToWishlistService', () => {
  let service: AddToWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddToWishlistService]
    });
    service = TestBed.inject(AddToWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have incrementWishlistCnt function', () => {
    expect(service.incrementWishlistCnt).toBeTruthy();
  });

  it('check incrementWishlistCnt function not null', () => {
    expect(service.incrementWishlistCnt(length)).not.toBeNull();
  });

  it('should have getCartBook function', () => {
    expect(service.getwishlistBook).toBeTruthy();
  });
});
