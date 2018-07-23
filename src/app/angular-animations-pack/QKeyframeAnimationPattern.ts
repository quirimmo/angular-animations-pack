import State from './QState';
import Transition from './QTransition';
import AbstractAnimationPattern from './QAbstractAnimationPattern';
import AnimationStyleProperties from './QAnimationStyleProperties';
import Style from './QStyle';
import Keyframe from './QKeyframe';
import KeyframeAnimation from './QKeyframeAnimation';

class KeyframeAnimationPattern extends AbstractAnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public animationStyleProperties: Array<AnimationStyleProperties> = [],
    public duration: number,
    public includeVoidTransitions: boolean = false
  ) {
    super(triggerName, includeVoidTransitions);

    const keyframeStyles: Array<Style> = this.animationStyleProperties.map(el => new Style(el));
    const keyframe: Keyframe = new Keyframe(keyframeStyles);
    const transition: Transition = new Transition('inactive <=> active', new KeyframeAnimation(this.duration, keyframe));

    this.setupStateList(this.stateList).setupTransitionList([transition]);
  }
}

export default KeyframeAnimationPattern;
