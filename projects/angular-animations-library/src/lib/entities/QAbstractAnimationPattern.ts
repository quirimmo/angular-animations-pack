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

  constructor(public triggerName: string, public includeEnterTransition: boolean = false, public includeLeaveTransition: boolean = false) {}

  setupStateList(stateList: Array<State>): AbstractAnimationPattern {
    this.stateList = stateList;
    return this;
  }

  setupTransitionList(transitionList: Array<Transition>): AbstractAnimationPattern {
    this.transitionList = transitionList;
    const animation: AbstractAnimation = this.transitionList[0].animation;
    if (this.includeEnterTransition) {
      this.addTransition(animation, ':enter');
    }
    if (this.includeLeaveTransition) {
      this.addTransition(animation, ':leave', true);
    }
    return this;
  }

  addTransition(animation: AbstractAnimation, transition: string, isLeaveTransition: boolean = false): AbstractAnimationPattern {
    if (animation instanceof KeyframeAnimation) {
      this.transitionList.push(new Transition(transition, animation));
    } else {
      const easing: string = isLeaveTransition ? 'ease-out' : 'ease-in';
      this.transitionList.push(new Transition(transition, new Animation(animation.duration, easing)));
    }
    return this;
  }

  initAnimationPattern(): AbstractAnimationPattern {
    this.setupStateList(this.stateList).setupTransitionList(this.transitionList);
    return this;
  }

  getTrigger(): AnimationTriggerMetadata {
    this.initAnimationPattern();
    return new Trigger(this.triggerName, this.stateList, this.transitionList).trigger();
  }
}

export default AbstractAnimationPattern;
