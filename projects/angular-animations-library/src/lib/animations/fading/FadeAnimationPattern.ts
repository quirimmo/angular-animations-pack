import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface FadeAnimationParams {
  fadeValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFadeValue?: number;
}

export function fadeAnimation(params: FadeAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeAnimationPattern(
    'fade',
    params.fadeValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidFadeValue
  ).getTrigger();
}

export class FadeAnimationPattern extends AnimationPattern {
  constructor(
    public trigger: string = 'fade',
    public fadeValue: number = 0,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFadeValue: number = 1
  ) {
    super(
      trigger,
      [
        new State('void', new Style({ opacity: voidFadeValue })),
        new State('inactive', new Style()),
        new State('active', new Style({ opacity: fadeValue }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
