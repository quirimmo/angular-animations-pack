import { AnimationTriggerMetadata } from '@angular/animations';
import { FillSizeAnimationParams, FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';

export function fillHeightAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FillHeightAnimationPattern(params.size, params.duration).getTrigger();
}

export class FillHeightAnimationPattern extends FillSizeAnimationPattern {
  constructor(public height: string = '100%', public duration: number = 100) {
    super('fillHeight', height, duration, true);
  }
}
