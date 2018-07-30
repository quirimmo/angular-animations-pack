import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';

fdescribe('AbstractBounceAnimationPattern', () => {
  it('should be a class', () => {
    expect(AbstractBounceAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(AbstractBounceAnimationPattern.getTranslation).toEqual(jasmine.any(Function));
    expect(AbstractBounceAnimationPattern.convertStylePropertiesToBounceProperties).toEqual(jasmine.any(Function));
  });

  describe('getTranslation', () => {
    it('should return translateY', () => {
      expect(AbstractBounceAnimationPattern.getTranslation(true)).toEqual('translateY');
    });

    it('should return translateX', () => {
      expect(AbstractBounceAnimationPattern.getTranslation(false)).toEqual('translateX');
    });
  });

  describe('convertStylePropertiesToBounceProperties', () => {
    it('should return translateY', () => {
      expect(AbstractBounceAnimationPattern.getTranslation(true)).toEqual('translateY');
    });
  });
});
