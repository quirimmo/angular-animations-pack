import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import { AnimationTriggerMetadata } from '@angular/animations';
import Keyframe from './QKeyframe';
import KeyframeAnimation from './QKeyframeAnimation';
import AnimationStyleProperties from './QAnimationStyleProperties';

export interface BounceVerticalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
  animationStyleProperties?: AnimationStyleProperties;
}

export function bounceVerticalAnimation(params: BounceVerticalAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceVerticalAnimationPattern(params.duration, params.includeVoidTransitions, params.animationStyleProperties).getTrigger();
}

export class BounceVerticalAnimationPattern extends AnimationPattern {
  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: AnimationStyleProperties = {}
  ) {
    super(
      'bounceVertical',
      [new State('inactive', new Style({ transform: 'translateX(0)' }))],
      [
        new Transition(
          'inactive <=> active',
          new KeyframeAnimation(
            duration,
            new Keyframe([
              new Style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
              new Style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.3 }),
              new Style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ])
          )
        )
      ],
      includeVoidTransitions
    );
  }
}
