import { AnimationTriggerMetadata } from '@angular/animations';
import Trigger from './QTrigger';
import State from './QState';
import Transition from './QTransition';
import Animation from './QAnimation';
import KeyframeAnimation from './QKeyframeAnimation';

class AnimationPattern {
  constructor(
    public triggerName: string,
    public stateList: Array<State>,
    public transitionList: Array<Transition>,
    public includeVoidTransitions: boolean = false
  ) {
    if (this.includeVoidTransitions) {
      const animation = this.transitionList[0].animation;
      const duration = animation.duration;
      if (animation instanceof KeyframeAnimation) {
        this.transitionList.push(new Transition('void <=> *', animation));
      } else {
        this.transitionList.push(new Transition('void => *', new Animation(duration, 'ease-in')));
        this.transitionList.push(new Transition('* => void', new Animation(duration, 'ease-out')));
      }
    }
  }

  getTrigger(): AnimationTriggerMetadata {
    return new Trigger(this.triggerName, this.stateList, this.transitionList).trigger();
  }
}

export default AnimationPattern;
