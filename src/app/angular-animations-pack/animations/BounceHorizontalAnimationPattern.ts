import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationStyleProperties from '../entities/QAnimationStyleProperties';
import AbstractBounceAnimationPattern, { BounceAnimationParams } from './AbstractBounceAnimationPattern';

export function bounceHorizontalAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const bounceStyleProperties: Array<AnimationStyleProperties> = AbstractBounceAnimationPattern.convertStylePropertiesToBounceProperties(
    params,
    false
  );
  return new BounceHorizontalAnimationPattern(params.duration, params.includeVoidTransitions, bounceStyleProperties).getTrigger();
}

export class BounceHorizontalAnimationPattern extends AbstractBounceAnimationPattern {
  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = []
  ) {
    super('bounceHorizontal', false, duration, includeVoidTransitions, animationStyleProperties);
  }
}
