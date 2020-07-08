import { Cart } from './cart';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new Cart( 1, 1)).toBeTruthy();
  });
});
