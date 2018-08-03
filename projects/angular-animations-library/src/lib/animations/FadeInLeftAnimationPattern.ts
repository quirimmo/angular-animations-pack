import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Style from '../entities/QStyle';
import State from '../entities/QState';
import Transition from '../entities/QTransition';

export interface FadeInLeftAnimationParams {
  duration?: number;
}

export function fadeInLeftAnimation(params: FadeInLeftAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeInLeftAnimationPattern(params.duration).getTrigger();
}

export class FadeInLeftAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeInLeft',
      [
        new State('*', new Style({ opacity: 1, transform: 'translateX(0%)' })),
        new State('void', new Style({ opacity: 0, transform: 'translateX(-100%)' }))
      ],
      [new Transition(':enter', new Animation(duration, 'ease-in'))],
      false
    );
  }
}
