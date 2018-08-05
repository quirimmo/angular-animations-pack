import State from './QState';
import Transition from './QTransition';
import AbstractAnimationPattern from './QAbstractAnimationPattern';
import AnimationStyleProperties from './QAnimationStyleProperties';
import Style from './QStyle';
import Keyframe from './QKeyframe';
import KeyframeAnimation from './QKeyframeAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

class KeyframeAnimationPattern extends AbstractAnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public animationStyleProperties: Array<AnimationStyleProperties> = [],
    public duration: number,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super(triggerName, includeEnterTransition, includeLeaveTransition);
  }

  initKeyframeAnimationPattern(): void {
    const keyframeStyles: Array<Style> = this.animationStyleProperties.map(el => new Style(el));
    const keyframe: Keyframe = new Keyframe(keyframeStyles);
    const transition: Transition = new Transition('inactive <=> active', new KeyframeAnimation(this.duration, keyframe));
    this.transitionList.push(transition);
  }

  getTrigger(): AnimationTriggerMetadata {
    this.initKeyframeAnimationPattern();
    return super.getTrigger();
  }

}

export default KeyframeAnimationPattern;
