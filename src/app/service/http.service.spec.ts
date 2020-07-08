import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCall function', () => {
    expect(service.getCall).toBeTruthy();
  });

  it('check getCall function not null', () => {
    expect(service.getCall(String)).not.toBeNull();
  });

  it('should have getAllBooks function', () => {
    expect(service.getAllBooks).toBeTruthy();
  });

  it('check getAllBooks function not null', () => {
    expect(service.getAllBooks(String)).not.toBeNull();
  });

  it('should have postBook function', () => {
    expect(service.postBook).toBeTruthy();
  });

  it('check postBook function not null', () => {
    expect(service.postBook(String, String)).not.toBeNull();
  });
});
