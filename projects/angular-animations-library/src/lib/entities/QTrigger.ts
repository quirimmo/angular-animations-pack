import { AnimationStateMetadata, AnimationTransitionMetadata, trigger, AnimationTriggerMetadata } from '@angular/animations';
import State from './QState';
import Transition from './QTransition';

class Trigger {
  public triggerParams: Array<AnimationStateMetadata | AnimationTransitionMetadata>;

  constructor(public triggerName: string, public stateList: Array<State>, public transitionList: Array<Transition>) {
    const states = this.stateList.map(el => el.state());
    const transitions = this.transitionList.map(el => el.transition());
    this.triggerParams = [].concat(states, transitions);
  }

  trigger(): AnimationTriggerMetadata {
    return trigger(this.triggerName, this.triggerParams);
  }
}

export default Trigger;
