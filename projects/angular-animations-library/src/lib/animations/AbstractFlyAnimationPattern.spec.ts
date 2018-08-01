import AbstractFlyAnimationPattern from './AbstractFlyAnimationPattern';

describe('AbstractFlyAnimationPattern', () => {
  it('should be a class', () => {
    expect(AbstractFlyAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(AbstractFlyAnimationPattern.getTransformValue).toEqual(jasmine.any(Function));
  });

  describe('getTransformValue', () => {
    it('should return a vertical translation', () => {
      expect(AbstractFlyAnimationPattern.getTransformValue(true)).toEqual('translateY');
    });

    it('should return an horizontal translation', () => {
      expect(AbstractFlyAnimationPattern.getTransformValue(false)).toEqual('translateX');
    });
  });
});
