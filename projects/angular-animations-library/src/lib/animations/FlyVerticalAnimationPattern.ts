import { AnimationTriggerMetadata } from '@angular/animations';
import AbstractFlyAnimationPattern, { FlyAnimationParams } from './AbstractFlyAnimationPattern';

export function flyVerticalAnimation(params: FlyAnimationParams = {}): AnimationTriggerMetadata {
  return new FlyVerticalAnimationPattern(params.flyValue, params.duration, params.includeVoidTransitions, params.voidFlyValue).getTrigger();
}

export class FlyVerticalAnimationPattern extends AbstractFlyAnimationPattern {
  constructor(
    public flyValue: string = '100%',
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFlyValue: string = '-100%'
  ) {
    super('flyVertical', true, flyValue, duration, includeVoidTransitions, voidFlyValue);
  }
}
