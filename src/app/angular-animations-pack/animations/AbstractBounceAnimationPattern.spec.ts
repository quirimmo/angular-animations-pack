import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';

describe('AbstractBounceAnimationPattern', () => {
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
    const params = {
      duration: 200,
      includeVoidTransitions: false,
      animationStyleProperties: [
        {
          opacity: 0.5,
          translation: '50px',
          offset: 0.1
        },
        {
          opacity: 1,
          translation: '250px',
          offset: 0.8
        }
      ]
    };

    it('should convert the params for vertical bounce', () => {
      expect(AbstractBounceAnimationPattern.convertStylePropertiesToBounceProperties(params, true)).toEqual([
        { opacity: 0.5, transform: 'translateY(50px)', offset: 0.1 },
        { opacity: 1, transform: 'translateY(250px)', offset: 0.8 }
      ]);
    });

    it('should convert the params for horizontal bounce', () => {
      expect(AbstractBounceAnimationPattern.convertStylePropertiesToBounceProperties(params, false)).toEqual([
        { opacity: 0.5, transform: 'translateX(50px)', offset: 0.1 },
        { opacity: 1, transform: 'translateX(250px)', offset: 0.8 }
      ]);
    });
  });
});
