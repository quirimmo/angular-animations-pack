import AnimationStyleProperties from '../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../entities/QKeyframeAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import { AnimationTriggerMetadata } from '@angular/animations';
import Keyframe from '../entities/QKeyframe';
import Transition from '../entities/QTransition';
import KeyframeAnimation from '../entities/QKeyframeAnimation';
import { BUILT_IN_ANIMATIONS_TIMING } from '../entities/QAnimationsMetadata';

export interface BounceOutUpAnimationParams {
  duration?: number;
}

const defaultBounceOutUpAnimationStyleParams: Array<AnimationStyleProperties> = [
  { opacity: 1, transform: 'translateY(0)', offset: 0 },
  { opacity: 0.5, transform: 'translateY(20%)', offset: 0.3 },
  { opacity: 0, transform: 'translateY(-100%)', offset: 1.0 }
];

export function bounceOutUpAnimation(params: BounceOutUpAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceOutUpAnimationPattern(params.duration).getTrigger();
}

class BounceOutUpAnimationPattern extends KeyframeAnimationPattern {
  constructor(public duration: number = BUILT_IN_ANIMATIONS_TIMING) {
    super(
      'bounceOutUp',
      [new State('inactive', new Style({ transform: `translateY(0)` }))],
      defaultBounceOutUpAnimationStyleParams,
      duration,
      false
    );

    this.transitionList.length = 0;
    const keyframeStyles: Array<Style> = this.animationStyleProperties.map(el => new Style(el));
    const keyframe: Keyframe = new Keyframe(keyframeStyles);
    const transition: Transition = new Transition(':leave', new KeyframeAnimation(this.duration, keyframe));
    this.transitionList.push(transition);
  }
}

export default BounceOutUpAnimationPattern;
