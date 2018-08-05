import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../../entities/QAnimationPattern';
import Animation from '../../entities/QAnimation';
import Style from '../../entities/QStyle';
import State from '../../entities/QState';
import Transition from '../../entities/QTransition';

export interface FadeOutLeftAnimationParams {
  duration?: number;
}

export function fadeOutLeftAnimation(params: FadeOutLeftAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeOutLeftAnimationPattern(params.duration).getTrigger();
}

export class FadeOutLeftAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeOutLeft',
      [
        new State('void', new Style({ opacity: 0, transform: 'translateX(-100%)' })),
        new State('*', new Style({ opacity: 1, transform: 'translateX(0)' }))
      ],
      [new Transition(':leave', new Animation(duration, 'ease-out'))],
      false
    );
  }
}
