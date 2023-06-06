import { RandomIntPipe } from './random-int.pipe';

describe('RandomIntPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomIntPipe();
    expect(pipe).toBeTruthy();
  });
});
