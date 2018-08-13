import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeTranslationAnimationPattern, FadeTranslationAnimationParams } from './AbstractFadeTranslationAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export function fadeVerticalTranslationAnimation(params: FadeTranslationAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeVerticalTranslationAnimationPattern(
    'fadeVerticalTranslation',
    params.fadeValue,
    params.translationValue,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition,
    params.voidFadeValue,
    params.voidTranslationValue
  ).getTrigger();
}

export function fadeInUpAnimation(): AnimationTriggerMetadata {
  return fadeInVerticalAnimation('fadeInUp', '-100%');
}

export function fadeOutUpAnimation(): AnimationTriggerMetadata {
  return fadeOutVerticalAnimation('fadeOutUp', '-100%');
}

export function fadeInDownAnimation(): AnimationTriggerMetadata {
  return fadeInVerticalAnimation('fadeInDown', '100%');
}

export function fadeOutDownAnimation(): AnimationTriggerMetadata {
  return fadeOutVerticalAnimation('fadeOutDown', '100%');
}

function fadeInVerticalAnimation(trigger: string, translation: string): AnimationTriggerMetadata {
  return new FadeVerticalTranslationAnimationPattern(
    trigger,
    1,
    '0%',
    BUILT_IN_ANIMATIONS_TIMING,
    true,
    false,
    0,
    translation
  ).getTrigger();
}

function fadeOutVerticalAnimation(trigger: string, translation: string): AnimationTriggerMetadata {
  return new FadeVerticalTranslationAnimationPattern(
    trigger,
    1,
    '0%',
    BUILT_IN_ANIMATIONS_TIMING,
    false,
    true,
    0,
    translation
  ).getTrigger();
}

export class FadeVerticalTranslationAnimationPattern extends FadeTranslationAnimationPattern {
  constructor(
    public trigger: string = 'fade',
    public fadeValue: number = 0,
    public translationValue: string = '0%',
    public duration: number = 100,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false,
    public voidFadeValue: number = 1,
    public voidTranslationValue: string = '100%'
  ) {
    super(
      trigger,
      false,
      fadeValue,
      translationValue,
      duration,
      includeEnterTransition,
      includeLeaveTransition,
      voidFadeValue,
      voidTranslationValue
    );
  }
}
