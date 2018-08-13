import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeTranslationAnimationPattern, FadeTranslationAnimationParams } from './AbstractFadeTranslationAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';


export function fadeHorizontalTranslationAnimation(params: FadeTranslationAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern(
    'fadeHorizontalTranslation',
    params.fadeValue,
    params.translationValue,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition,
    params.voidFadeValue,
    params.voidTranslationValue
  ).getTrigger();
}

export function fadeInLeftAnimation(): AnimationTriggerMetadata {
  return fadeInHorizontalAnimation('fadeInLeft', '-100%');
}

export function fadeOutLeftAnimation(): AnimationTriggerMetadata {
  return fadeOutHorizontalAnimation('fadeOutLeft', '-100%');
}

export function fadeInRightAnimation(): AnimationTriggerMetadata {
  return fadeInHorizontalAnimation('fadeInRight', '100%');
}

export function fadeOutRightAnimation(): AnimationTriggerMetadata {
  return fadeOutHorizontalAnimation('fadeOutRight', '100%');
}

function fadeInHorizontalAnimation(trigger: string, horizontalTranslation: string): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern(
    trigger,
    1,
    '0%',
    BUILT_IN_ANIMATIONS_TIMING,
    true,
    false,
    0,
    horizontalTranslation
  ).getTrigger();
}

function fadeOutHorizontalAnimation(trigger: string, horizontalTranslation: string): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern(
    trigger,
    1,
    '0%',
    BUILT_IN_ANIMATIONS_TIMING,
    false,
    true,
    0,
    horizontalTranslation
  ).getTrigger();
}

export class FadeHorizontalTranslationAnimationPattern extends FadeTranslationAnimationPattern {
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
      true,
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
