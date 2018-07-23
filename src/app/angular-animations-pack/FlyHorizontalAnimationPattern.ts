import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import Animation from './QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface FlyHorizontalAnimationParams {
  flyHorizontalValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFlyHorizontalValue?: number;
}

export function flyHorizontalAnimation(params: FlyHorizontalAnimationParams = {}): AnimationTriggerMetadata {
  return new FlyHorizontalAnimationPattern(
    params.flyHorizontalValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidFlyHorizontalValue
  ).getTrigger();
}

export class FlyHorizontalAnimationPattern extends AnimationPattern {
  constructor(
    public flyHorizontalValue: number = 100,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFlyHorizontalValue: number = -100
  ) {
    super(
      'flyHorizontal',
      [
        new State('void', new Style({ transform: `translateX(${voidFlyHorizontalValue}%)` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `translateX(${flyHorizontalValue}%)` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
