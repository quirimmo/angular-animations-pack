import { AnimationTriggerMetadata } from "@angular/animations";
import Trigger from "./QTrigger";
import State from "./QState";
import Transition from "./QTransition";
import Animation from "./QAnimation";

class AnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>,
    public includeVoidTransitions: boolean = false
  ) {
    if (this.includeVoidTransitions) {
      const duration = this.transitionList[0].animation.duration;
      this.transitionList.push(new Transition("void => *", new Animation(duration, "ease-in")));
      this.transitionList.push(new Transition("* => void", new Animation(duration, "ease-out")));
    }
  }

  getTrigger(): AnimationTriggerMetadata {
    return new Trigger(
      this.triggerName,
      this.stateList,
      this.transitionList
    ).trigger();
  }
}

export default AnimationPattern;
