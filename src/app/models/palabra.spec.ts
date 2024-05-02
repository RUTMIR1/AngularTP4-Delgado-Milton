import { Palabra } from './palabra';

describe('Palabra', () => {
  it('should create an instance', () => {
    expect(new Palabra("","",0,0,0,0,0)).toBeTruthy();
  });
});
