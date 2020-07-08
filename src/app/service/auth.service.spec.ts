import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have registerUser function', () => {
    expect(service. registerUser).toBeTruthy();
  });

  it('should have loginUser function', () => {
    expect(service.loginUser).toBeTruthy();
  });

  it('should have forgotPassword function', () => {
    expect(service.forgotPassword).toBeTruthy();
  });

  it('should have resetPassword function', () => {
    expect(service.resetPassword).toBeTruthy();
  });

  it('check registerUser function not null', () => {
    expect(service.registerUser(String)).not.toBeNull();
  });

  it('check loginUser function not null', () => {
    expect(service.loginUser(String)).not.toBeNull();
  });

  it('check forgotPassword function not null', () => {
    expect(service.forgotPassword(String)).not.toBeNull();
  });

  it('check resetPassword function not null', () => {
    expect(service.resetPassword(String)).not.toBeNull();
  });
});
