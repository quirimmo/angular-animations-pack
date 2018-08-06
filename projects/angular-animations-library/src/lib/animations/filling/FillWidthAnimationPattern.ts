import { AnimationTriggerMetadata } from '@angular/animations';
import { FillSizeAnimationParams, FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export function fillWidthAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FillWidthAnimationPattern(
    params.size,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition
  ).getTrigger();
}

export class FillWidthAnimationPattern extends FillSizeAnimationPattern {
  constructor(
    public width: string = '100%',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super('fillWidth', width, duration, false, includeEnterTransition, includeLeaveTransition);
  }
}
