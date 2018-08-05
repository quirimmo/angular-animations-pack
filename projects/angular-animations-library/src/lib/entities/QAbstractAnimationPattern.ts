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
      this.addTransition(animation, ':leave');
    }

    // if (this.includeVoidTransitions) {
    //   const animation: AbstractAnimation = this.transitionList[0].animation;
    //   if (animation instanceof KeyframeAnimation) {
    //     this.transitionList.push(new Transition('void <=> *', animation));
    //   } else {
    //     const duration: number = animation.duration;
    //     this.transitionList.push(new Transition('void => *', new Animation(duration, 'ease-in')));
    //     this.transitionList.push(new Transition('* => void', new Animation(duration, 'ease-out')));
    //   }
    // }

    return this;
  }

  addTransition(animation: AbstractAnimation, transition: string): AbstractAnimationPattern {
    if (animation instanceof KeyframeAnimation) {
      this.transitionList.push(new Transition(transition, animation));
    } else {
      this.transitionList.push(new Transition(transition, new Animation(animation.duration, 'ease-in')));
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
