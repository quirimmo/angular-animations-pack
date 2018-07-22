import AnimationPattern from './AnimationPattern';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import Animation from './QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface FlyVerticalAnimationParams {
  flyHorizontalValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFlyHorizontalValue?: number;
}

export function flyVerticalAnimation(params: FlyVerticalAnimationParams = {}): AnimationTriggerMetadata {
  return new FlyVerticalAnimationPattern(
    params.flyHorizontalValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidFlyHorizontalValue
  ).getTrigger();
}

export class FlyVerticalAnimationPattern extends AnimationPattern {
  constructor(
    public flyVerticalValue: number = 100,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFlyVerticalValue: number = -100
  ) {
    super(
      'flyVertical',
      [
        new State('void', new Style({ transform: `translateY(${voidFlyVerticalValue}%)` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `translateY(${flyVerticalValue}%)` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
