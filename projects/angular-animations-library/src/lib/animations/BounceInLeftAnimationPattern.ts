import AnimationStyleProperties from '../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../entities/QKeyframeAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import { AnimationTriggerMetadata } from '@angular/animations';
import Keyframe from '../entities/QKeyframe';
import Transition from '../entities/QTransition';
import KeyframeAnimation from '../entities/QKeyframeAnimation';
import { BUILT_IN_ANIMATIONS_TIMING } from '../entities/QAnimationsMetadata';

export interface BounceInLeftAnimationParams {
  duration?: number;
}

const defaultBounceInLeftAnimationStyleParams: Array<AnimationStyleProperties> = [
  { opacity: 0, transform: 'translateX(-100%)', offset: 0 },
  { opacity: 0.5, transform: 'translateX(20%)', offset: 0.7 },
  { opacity: 1, transform: 'translateX(0)', offset: 1.0 }
];

export function bounceInLeftAnimation(params: BounceInLeftAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceInLeftAnimationPattern(params.duration).getTrigger();
}

class BounceInLeftAnimationPattern extends KeyframeAnimationPattern {
  constructor(public duration: number = BUILT_IN_ANIMATIONS_TIMING) {
    super(
      'bounceInLeft',
      [new State('inactive', new Style({ transform: `translateX(0)` }))],
      defaultBounceInLeftAnimationStyleParams,
      duration,
      false
    );

    this.transitionList.length = 0;
    const keyframeStyles: Array<Style> = this.animationStyleProperties.map(el => new Style(el));
    const keyframe: Keyframe = new Keyframe(keyframeStyles);
    const transition: Transition = new Transition(':enter', new KeyframeAnimation(this.duration, keyframe));
    this.transitionList.push(transition);
  }
}

export default BounceInLeftAnimationPattern;