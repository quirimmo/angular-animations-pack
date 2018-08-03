import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface AppearAnimationParams {
  duration?: number;
}

export function appearAnimation(params: AppearAnimationParams = {}): AnimationTriggerMetadata {
  return new AppearAnimationPattern(params.duration).getTrigger();
}

export class AppearAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 100) {
    super(
      'appear',
      [
        new State('void', new Style({ transform: `scale(0)`, opacity: 0 })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `scale(1)`, opacity: 1 }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      true
    );
  }
}
