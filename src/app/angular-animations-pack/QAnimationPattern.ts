import { AnimationTriggerMetadata } from '@angular/animations';
import Trigger from './QTrigger';
import State from './QState';
import Transition from './QTransition';
import Animation from './QAnimation';
import KeyframeAnimation from './QKeyframeAnimation';
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
