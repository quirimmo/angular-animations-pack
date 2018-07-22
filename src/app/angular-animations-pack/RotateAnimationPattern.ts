import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import Animation from './QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface RotateAnimationParams {
  flyHorizontalValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFlyHorizontalValue?: number;
}

export function rotateAnimation(params: RotateAnimationParams = {}): AnimationTriggerMetadata {
  return new RotateAnimationPattern(params.duration, params.includeVoidTransitions).getTrigger();
}

export class RotateAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 100, public includeVoidTransitions: boolean = false) {
    super(
      'rotate',
      [
        new State('void', new Style({ transform: `rotate(-45deg)` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `rotate(45deg)` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
