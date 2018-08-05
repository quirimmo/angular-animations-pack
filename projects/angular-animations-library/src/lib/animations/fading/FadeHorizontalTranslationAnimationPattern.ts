import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeTranslationAnimationPattern } from './AbstractFadeTranslationAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface FadeHorizontalTranslationAnimationParams {
  fadeValue?: number;
  translationValue?: string;
  duration?: number;
  includeEnterTransition?: boolean;
  includeLeaveTransition?: boolean;
  voidFadeValue?: number;
  voidTranslationValue?: string;
}

export function fadeHorizontalTranslationAnimation(params: FadeHorizontalTranslationAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern(
    'fadeTranslation',
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

export function fadeInRightAnimation(): AnimationTriggerMetadata {
  return fadeInHorizontalAnimation('fadeInRight', '100%');
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
