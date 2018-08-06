import { AnimationTriggerMetadata } from '@angular/animations';
import { FillSizeAnimationParams, FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export function fillHeightAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FillHeightAnimationPattern(
    params.size,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition
  ).getTrigger();
}

export class FillHeightAnimationPattern extends FillSizeAnimationPattern {
  constructor(
    public height: string = '100%',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super('fillHeight', height, duration, true, includeEnterTransition, includeLeaveTransition);
  }
}
