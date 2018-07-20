import { AnimationTriggerMetadata } from "@angular/animations";
import Trigger from "./QTrigger";
import State from "./QState";
import Transition from "./QTransition";

class AnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>
  ) {}

  getTrigger(): AnimationTriggerMetadata {
    return new Trigger(
      this.triggerName,
      this.stateList,
      this.transitionList
    ).trigger();
  }
}

export default AnimationPattern;
