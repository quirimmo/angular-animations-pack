import { AnimationTriggerMetadata } from '@angular/animations';
import { FadeAnimationPattern } from './FadeAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface FadeInAnimationParams {
  duration?: number;
}

export function fadeInAnimation(params: FadeInAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeAnimationPattern('fadeIn', 1, BUILT_IN_ANIMATIONS_TIMING, true, 0).getTrigger();
}
