import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import { AnimationTriggerMetadata } from '@angular/animations';
import Keyframe from './QKeyframe';
import KeyframeAnimation from './QKeyframeAnimation';
import AnimationStyleProperties from './QAnimationStyleProperties';
import Trigger from './QTrigger';
import KeyframeAnimationPattern from './QKeyframeAnimationPattern';

// provide the styles for this animation in a more precise way
export interface BounceVerticalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
  animationStyleProperties?: Array<AnimationStyleProperties>;
}

export function bounceVerticalAnimation(params: BounceVerticalAnimationParams = {}): AnimationTriggerMetadata {
  // here process the animation style param in order to create a general AnimationStyleProperties array to pass to the class
  return new BounceVerticalAnimationPattern(params.duration, params.includeVoidTransitions, params.animationStyleProperties).getTrigger();
}
export class BounceVerticalAnimationPattern extends KeyframeAnimationPattern {
  public animationPattern: AnimationPattern;

  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = []
  ) {
    super(
      'bounceVertical',
      [new State('inactive', new Style({ transform: 'translateX(0)' }))],
      animationStyleProperties,
      duration,
      includeVoidTransitions
    );
  }
}
