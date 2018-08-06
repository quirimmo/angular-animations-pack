import {
  FadeHorizontalTranslationAnimationPattern,
  fadeInLeftAnimation,
  fadeOutLeftAnimation,
  fadeInRightAnimation,
  fadeOutRightAnimation
} from './FadeHorizontalTranslationAnimationPattern';
import { FadeTranslationAnimationPattern } from './AbstractFadeTranslationAnimationPattern';

const instance: FadeHorizontalTranslationAnimationPattern = new FadeHorizontalTranslationAnimationPattern('trigger');

describe('FadeHorizontalTranslationAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeHorizontalTranslationAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeHorizontalTranslationAnimationPattern).toBeTruthy();
  });

  it('should inherit from FadeTranslationAnimationPattern', () => {
    expect(instance instanceof FadeTranslationAnimationPattern).toBeTruthy();
  });
});

describe('fadeInLeftAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInLeftAnimation()).toEqual(
      new FadeHorizontalTranslationAnimationPattern('fadeInLeft', 1, '0%', 300, true, false, 0, '-100%').getTrigger()
    );
  });
});

describe('fadeOutLeftAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutLeftAnimation()).toEqual(
      new FadeHorizontalTranslationAnimationPattern('fadeOutLeft', 1, '0%', 300, false, true, 0, '-100%').getTrigger()
    );
  });
});

describe('fadeInRightAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInRightAnimation()).toEqual(
      new FadeHorizontalTranslationAnimationPattern('fadeInRight', 1, '0%', 300, true, false, 0, '100%').getTrigger()
    );
  });
});

describe('fadeOutRightAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutRightAnimation()).toEqual(
      new FadeHorizontalTranslationAnimationPattern('fadeOutRight', 1, '0%', 300, false, true, 0, '100%').getTrigger()
    );
  });
});
