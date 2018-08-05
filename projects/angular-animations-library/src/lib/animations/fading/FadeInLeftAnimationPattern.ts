import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeHorizontalTranslationAnimationPattern } from './FadeHorizontalTranslationAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface FadeInLeftAnimationParams {
  duration?: number;
}

export function fadeInLeftAnimation(params: FadeInLeftAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern('fadeInLeft', 1, '0%', BUILT_IN_ANIMATIONS_TIMING, true, 0, '-100%').getTrigger();
}
