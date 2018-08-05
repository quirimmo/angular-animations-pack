import { AnimationTriggerMetadata } from '@angular/animations';
import { FillSizeAnimationParams, FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';

export function fillHeightAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FillHeightAnimationPattern(params.size, params.duration, params.includeVoidTransition).getTrigger();
}

export class FillHeightAnimationPattern extends FillSizeAnimationPattern {
  constructor(public height: string = '100%', public duration: number = 100, public includeVoidTransitions: boolean = false) {
    super('fillHeight', height, duration, includeVoidTransitions);
  }
}
