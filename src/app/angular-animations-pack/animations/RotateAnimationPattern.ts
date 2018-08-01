import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface RotateAnimationParams {
  rotationValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidRotationValue?: number;
}

export function rotateAnimation(params: RotateAnimationParams = {}): AnimationTriggerMetadata {
  return new RotateAnimationPattern(
    params.rotationValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidRotationValue
  ).getTrigger();
}

export class RotateAnimationPattern extends AnimationPattern {
  constructor(
    public rotationValue: number = 45,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidRotationValue: number = -45
  ) {
    super(
      'rotate',
      [
        new State('void', new Style({ transform: `rotate(${voidRotationValue}deg)` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `rotate(${rotationValue}deg)` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
