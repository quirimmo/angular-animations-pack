import { AnimationTriggerMetadata } from '@angular/animations';
import AbstractFlyAnimationPattern, { FlyAnimationParams } from './AbstractFlyAnimationPattern';

export function flyHorizontalAnimation(params: FlyAnimationParams = {}): AnimationTriggerMetadata {
  return new FlyHorizontalAnimationPattern(
    params.flyValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidFlyValue
  ).getTrigger();
}

export class FlyHorizontalAnimationPattern extends AbstractFlyAnimationPattern {
  constructor(
    public flyValue: string = '100%',
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFlyValue: string = '-100%'
  ) {
    super('flyHorizontal', false, flyValue, duration, includeVoidTransitions, voidFlyValue);
  }
}
