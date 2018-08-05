import AnimationStyleProperties from '../../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../../entities/QKeyframeAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import { AnimationTriggerMetadata } from '@angular/animations';
import Keyframe from '../../entities/QKeyframe';
import Transition from '../../entities/QTransition';
import KeyframeAnimation from '../../entities/QKeyframeAnimation';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface BounceInUpAnimationParams {
  duration?: number;
}

const defaultBounceInUpAnimationStyleParams: Array<AnimationStyleProperties> = [
  { opacity: 0, transform: 'translateY(-100%)', offset: 0 },
  { opacity: 0.5, transform: 'translateY(20%)', offset: 0.7 },
  { opacity: 1, transform: 'translateY(0)', offset: 1.0 }
];

export function bounceInUpAnimation(params: BounceInUpAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceInUpAnimationPattern(params.duration).getTrigger();
}

class BounceInUpAnimationPattern extends KeyframeAnimationPattern {
  constructor(public duration: number = BUILT_IN_ANIMATIONS_TIMING) {
    super(
      'bounceInUp',
      [new State('inactive', new Style({ transform: `translateY(0)` }))],
      defaultBounceInUpAnimationStyleParams,
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

export default BounceInUpAnimationPattern;
