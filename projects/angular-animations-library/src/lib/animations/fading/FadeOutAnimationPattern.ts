import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeAnimationPattern } from './FadeAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface FadeOutAnimationParams {
  duration?: number;
}

export function fadeOutAnimation(params: FadeOutAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeAnimationPattern('fadeOut', 0, BUILT_IN_ANIMATIONS_TIMING, true, 1).getTrigger();
}
