import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationStyleProperties from '../../entities/QAnimationStyleProperties';
import AbstractBounceAnimationPattern, { BounceAnimationParams } from './AbstractBounceAnimationPattern';

export function bounceVerticalAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const bounceStyleProperties: Array<AnimationStyleProperties> = AbstractBounceAnimationPattern.convertStylePropertiesToBounceProperties(
    params,
    true
  );
  return new BounceVerticalAnimationPattern(params.duration, params.includeVoidTransitions, bounceStyleProperties).getTrigger();
}

export class BounceVerticalAnimationPattern extends AbstractBounceAnimationPattern {
  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = []
  ) {
    super('bounceVertical', true, duration, includeVoidTransitions, animationStyleProperties);
  }
}
