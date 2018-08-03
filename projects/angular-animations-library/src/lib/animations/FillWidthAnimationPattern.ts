import { AnimationTriggerMetadata } from '@angular/animations';
import { FillSizeAnimationParams, FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';

export function fillWidthAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FillWidthAnimationPattern(params.size, params.duration, params.includeVoidTransition).getTrigger();
}

export class FillWidthAnimationPattern extends FillSizeAnimationPattern {
  constructor(public width: string = '100%', public duration: number = 100, public includeVoidTransitions: boolean = false) {
    super('fillWidth', width, duration, includeVoidTransitions);
  }
}
