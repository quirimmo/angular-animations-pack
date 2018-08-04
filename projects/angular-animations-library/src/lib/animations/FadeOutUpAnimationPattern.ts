import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Style from '../entities/QStyle';
import State from '../entities/QState';
import Transition from '../entities/QTransition';

export interface FadeOutUpAnimationParams {
  duration?: number;
}

export function fadeOutUpAnimation(params: FadeOutUpAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeOutUpAnimationPattern(params.duration).getTrigger();
}

export class FadeOutUpAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeOutUp',
      [
        new State('void', new Style({ opacity: 0, transform: 'translateY(-100%)' })),
        new State('*', new Style({ opacity: 1, transform: 'translateX(0)' }))
      ],
      [new Transition(':leave', new Animation(duration, 'ease-out'))],
      false
    );
  }
}
