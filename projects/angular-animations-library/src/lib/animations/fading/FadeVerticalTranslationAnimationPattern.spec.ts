import {
  FadeVerticalTranslationAnimationPattern,
  fadeInUpAnimation,
  fadeOutUpAnimation,
  fadeInDownAnimation,
  fadeOutDownAnimation
} from './FadeVerticalTranslationAnimationPattern';
import { FadeTranslationAnimationPattern } from './AbstractFadeTranslationAnimationPattern';

const instance: FadeVerticalTranslationAnimationPattern = new FadeVerticalTranslationAnimationPattern('trigger');

describe('FadeVerticalTranslationAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeVerticalTranslationAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeVerticalTranslationAnimationPattern).toBeTruthy();
  });

  it('should inherit from FadeTranslationAnimationPattern', () => {
    expect(instance instanceof FadeTranslationAnimationPattern).toBeTruthy();
  });
});

describe('fadeInUpAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInUpAnimation()).toEqual(
      new FadeVerticalTranslationAnimationPattern('fadeInUp', 1, '0%', 300, true, false, 0, '-100%').getTrigger()
    );
  });
});

describe('fadeOutUpAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutUpAnimation()).toEqual(
      new FadeVerticalTranslationAnimationPattern('fadeOutUp', 1, '0%', 300, false, true, 0, '-100%').getTrigger()
    );
  });
});

describe('fadeInDownAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInDownAnimation()).toEqual(
      new FadeVerticalTranslationAnimationPattern('fadeInDown', 1, '0%', 300, true, false, 0, '100%').getTrigger()
    );
  });
});

describe('fadeOutDownAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutDownAnimation()).toEqual(
      new FadeVerticalTranslationAnimationPattern('fadeOutDown', 1, '0%', 300, false, true, 0, '100%').getTrigger()
    );
  });
});
