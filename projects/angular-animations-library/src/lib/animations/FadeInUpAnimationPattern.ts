import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Style from '../entities/QStyle';
import State from '../entities/QState';
import Transition from '../entities/QTransition';

export interface FadeInUpAnimationParams {
  duration?: number;
}

export function fadeInUpAnimation(params: FadeInUpAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeInUpAnimationPattern(params.duration).getTrigger();
}

export class FadeInUpAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeInUp',
      [
        new State('*', new Style({ opacity: 1, transform: 'translateY(0%)' })),
        new State('void', new Style({ opacity: 0, transform: 'translateY(-100%)' }))
      ],
      [new Transition(':enter', new Animation(duration, 'ease-in'))],
      false
    );
  }
}
