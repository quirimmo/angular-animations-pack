import { AnimationTriggerMetadata } from '@angular/animations';
import Trigger from './QTrigger';
import State from './QState';
import Transition from './QTransition';
import Animation from './QAnimation';
import KeyframeAnimation from './QKeyframeAnimation';
import AnimationPattern from './AnimationPattern';

class KeyframeAnimationPattern extends AnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>,
    public includeVoidTransitions: boolean = false
  ) {
    super(triggerName, stateList, transitionList, includeVoidTransitions);
  }
}

export default KeyframeAnimationPattern;
