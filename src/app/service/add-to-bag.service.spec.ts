import { TestBed } from '@angular/core/testing';
import { AddToBagService } from './add-to-bag.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AddToBagService', () => {
  let service: AddToBagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddToBagService]
    });
    service = TestBed.inject(AddToBagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have incrementBagCnt function', () => {
    expect(service.incrementBagCnt).toBeTruthy();
  });

  it('should have getCartBook function', () => {
    expect(service.getCartBook).toBeTruthy();
  });

  // it('check incrementBagCnt function not null', () => {
  //   expect(service.incrementBagCnt(length)).not.toBeNull();
  // });

});
