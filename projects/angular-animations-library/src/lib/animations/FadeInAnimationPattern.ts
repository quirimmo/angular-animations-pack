import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Style from '../entities/QStyle';
import State from '../entities/QState';
import Transition from '../entities/QTransition';

export interface FadeInAnimationParams {
  duration?: number;
}

export function fadeInAnimation(params: FadeInAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeInAnimationPattern(params.duration).getTrigger();
}

export class FadeInAnimationPattern extends AnimationPattern {
  constructor(public duration: number = 300) {
    super(
      'fadeIn',
      [new State('*', new Style({ opacity: 1 })), new State('void', new Style({ opacity: 0 }))],
      [new Transition(':enter', new Animation(duration, 'ease-in'))],
      false
    );
  }
}
