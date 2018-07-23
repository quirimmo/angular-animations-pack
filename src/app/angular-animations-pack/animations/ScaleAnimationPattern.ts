import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface ScaleAnimationParams {
  scaleValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  scaleVoidValue?: number;
}

export function scaleAnimation(params: ScaleAnimationParams = {}): AnimationTriggerMetadata {
  return new ScaleAnimationPattern(params.scaleValue, params.duration, params.includeVoidTransitions, params.scaleVoidValue).getTrigger();
}

export class ScaleAnimationPattern extends AnimationPattern {
  constructor(
    public scaleValue: number = 1.1,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidScaleValue: number = 0
  ) {
    super(
      'scale',
      [
        new State('void', new Style({ transform: `scale(${voidScaleValue})` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `scale(${scaleValue})` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
