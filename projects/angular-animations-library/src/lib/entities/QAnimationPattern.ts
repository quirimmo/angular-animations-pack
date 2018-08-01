import State from './QState';
import Transition from './QTransition';
import AbstractAnimationPattern from './QAbstractAnimationPattern';

class AnimationPattern extends AbstractAnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>,
    public includeVoidTransitions: boolean = false
  ) {
    super(triggerName, includeVoidTransitions);
    this.setupStateList(stateList).setupTransitionList(transitionList);
  }

}

export default AnimationPattern;
