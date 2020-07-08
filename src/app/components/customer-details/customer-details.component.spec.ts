import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsComponent ],
      imports: [ HttpClientTestingModule, MatSnackBarModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
