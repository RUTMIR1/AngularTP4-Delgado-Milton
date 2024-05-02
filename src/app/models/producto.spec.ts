import { Producto } from './producto';

describe('Producto', () => {
  it('should create an instance', () => {
    expect(new Producto("","",0.0,"")).toBeTruthy();
  });
});
