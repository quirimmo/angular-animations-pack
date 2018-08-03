import { transition, AnimationTransitionMetadata } from '@angular/animations';
import AbstractAnimation from './QAbstractAnimation';
import Animation from './QAnimation';

class Transition {
  constructor(public stateChangeExpression: string = 'inactive => active', public animation: AbstractAnimation = new Animation()) {}

  transition(): AnimationTransitionMetadata {
    return transition(this.stateChangeExpression, this.animation.animate());
  }
}

export default Transition;
