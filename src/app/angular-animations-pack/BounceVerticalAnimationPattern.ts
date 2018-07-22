import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import Animation from './QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface BounceVerticalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
}

export function bounceVerticalAnimation(params: BounceVerticalAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceVerticalAnimationPattern(params.duration, params.includeVoidTransitions).getTrigger();
}

export class BounceVerticalAnimationPattern extends AnimationPattern {
  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false
  ) {
    super(
      'bounceVertical',
      [
        new State('void', new Style({ opacity: 0.4 })),
        new State('inactive', new Style()),
        new State('active', new Style({ opacity: 0.7 }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
