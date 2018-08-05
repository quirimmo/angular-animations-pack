import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../../entities/QAnimationPattern';
import Animation from '../../entities/QAnimation';
import Style from '../../entities/QStyle';
import State from '../../entities/QState';
import Transition from '../../entities/QTransition';

export interface FadeOutRightAnimationParams {
  duration?: number;
}

export function fadeOutRightAnimation(params: FadeOutRightAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeOutRightAnimationPattern(params.duration).getTrigger();
}

export class FadeOutRightAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeOutRight',
      [
        new State('void', new Style({ opacity: 0, transform: 'translateX(100%)' })),
        new State('*', new Style({ opacity: 1, transform: 'translateX(0)' }))
      ],
      [new Transition(':leave', new Animation(duration, 'ease-out'))],
      false
    );
  }
}
