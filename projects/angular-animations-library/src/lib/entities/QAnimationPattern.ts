import State from './QState';
import Transition from './QTransition';
import AbstractAnimationPattern from './QAbstractAnimationPattern';

class AnimationPattern extends AbstractAnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super(triggerName, includeEnterTransition, includeLeaveTransition);
  }
}

export default AnimationPattern;
