import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface FadeHorizontalTranslationAnimationParams {
  fadeValue?: number;
  translationValue?: string;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFadeValue?: number;
  voidTranslationValue?: string;
}

export function fadeHorizontalTranslationAnimation(params: FadeHorizontalTranslationAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeHorizontalTranslationAnimationPattern(
    'fadeTranslation',
    params.fadeValue,
    params.translationValue,
    params.duration,
    params.includeVoidTransitions,
    params.voidFadeValue,
    params.voidTranslationValue
  ).getTrigger();
}

export class FadeHorizontalTranslationAnimationPattern extends AnimationPattern {
  constructor(
    public trigger: string = 'fade',
    public fadeValue: number = 0,
    public translationValue: string = '0%',
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFadeValue: number = 1,
    public voidTranslationValue: string = '100%'
  ) {
    super(
      trigger,
      [
        new State('void', new Style({ opacity: voidFadeValue, transform: `translateX(${voidTranslationValue})` })),
        new State('inactive', new Style()),
        new State('active', new Style({ opacity: fadeValue, transform: `translateX(${translationValue})` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
