import { AnimationTriggerMetadata } from '@angular/animations';
import State from './QState';
import Transition from './QTransition';
import Trigger from './QTrigger';
import KeyframeAnimation from './QKeyframeAnimation';
import Animation from './QAnimation';
import AbstractAnimation from './QAbstractAnimation';

abstract class AbstractAnimationPattern {
  public stateList: Array<State> = [];
  public transitionList: Array<Transition> = [];

  constructor(public triggerName: string, public includeVoidTransitions: boolean = false) {}

  setupStateList(stateList: Array<State>): AbstractAnimationPattern {
    this.stateList = stateList;
    return this;
  }

  setupTransitionList(transitionList: Array<Transition>): AbstractAnimationPattern {
    this.transitionList = transitionList;
    if (this.includeVoidTransitions) {
      const animation: AbstractAnimation = this.transitionList[0].animation;
      const duration: number = animation.duration;
      if (animation instanceof KeyframeAnimation) {
        this.transitionList.push(new Transition('void <=> *', animation));
      } else {
        this.transitionList.push(new Transition('void => *', new Animation(duration, 'ease-in')));
        this.transitionList.push(new Transition('* => void', new Animation(duration, 'ease-out')));
      }
    }
    return this;
  }

  getTrigger(): AnimationTriggerMetadata {
    return new Trigger(this.triggerName, this.stateList, this.transitionList).trigger();
  }
}

export default AbstractAnimationPattern;
