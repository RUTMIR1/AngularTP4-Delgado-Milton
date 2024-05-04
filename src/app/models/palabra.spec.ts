import { Palabra } from './palabra';
import { Pregunta } from './pregunta';

describe('Palabra', () => {
  it('should create an instance', () => {
    expect(new Palabra(0,"","",0,0,0,0,0,[])).toBeTruthy();
  });
});
