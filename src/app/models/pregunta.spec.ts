import { Pregunta } from './pregunta';

describe('Pregunta', () => {
  it('should create an instance', () => {
    expect(new Pregunta(0,0,0,0,0,"",0)).toBeTruthy();
  });
});
