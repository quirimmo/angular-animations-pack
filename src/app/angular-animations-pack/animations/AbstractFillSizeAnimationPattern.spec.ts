import { FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';

describe('FillSizeAnimationPattern', () => {
  it('should be a class', () => {
    expect(FillSizeAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(FillSizeAnimationPattern.getSize).toEqual(jasmine.any(Function));
  });

  describe('getSize', () => {
    const size = '100px';

    it('should return height', () => {
      expect(FillSizeAnimationPattern.getSize(size, true)).toEqual({ height: size });
    });

    it('should return width', () => {
      expect(FillSizeAnimationPattern.getSize(size, false)).toEqual({ width: size });
    });
  });
});
