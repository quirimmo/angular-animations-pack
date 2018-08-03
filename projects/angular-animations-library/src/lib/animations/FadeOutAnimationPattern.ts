import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';

export interface FadeOutAnimationParams {
  duration?: number;
}

export function fadeOutAnimation(params: FadeOutAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeOutAnimationPattern(params.duration).getTrigger();
}

export class FadeOutAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeOut',
      [new State('void', new Style({ opacity: 0 })), new State('*', new Style({ opacity: 1 }))],
      [new Transition(':leave', new Animation(duration, 'ease-out'))],
      false
    );
  }
}
