import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Style from '../entities/QStyle';
import State from '../entities/QState';
import Transition from '../entities/QTransition';

export interface FadeInRightAnimationParams {
  duration?: number;
}

export function fadeInRightAnimation(params: FadeInRightAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeInRightAnimationPattern(params.duration).getTrigger();
}

export class FadeInRightAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeInRight',
      [
        new State('*', new Style({ opacity: 1, transform: 'translateX(0%)' })),
        new State('void', new Style({ opacity: 0, transform: 'translateX(100%)' }))
      ],
      [new Transition(':enter', new Animation(duration, 'ease-in'))],
      false
    );
  }
}
