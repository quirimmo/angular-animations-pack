import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';
import { BUILT_IN_ANIMATIONS_TIMING, CommonAnimationParameters } from '../../entities/QAnimationsMetadata';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';

export interface FadeAnimationParams extends CommonAnimationParameters {
  fadeValue?: number;
  voidFadeValue?: number;
}

export function fadeAnimation(params: FadeAnimationParams = {}): AnimationTriggerMetadata {
  return new FadeAnimationPattern(
    'fade',
    params.fadeValue,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition,
    params.voidFadeValue
  ).getTrigger();
}

export function fadeInAnimation(): AnimationTriggerMetadata {
  return new FadeAnimationPattern('fadeIn', 1, BUILT_IN_ANIMATIONS_TIMING, true, false, 0).getTrigger();
}

export function fadeOutAnimation(): AnimationTriggerMetadata {
  return new FadeAnimationPattern('fadeOut', 0, BUILT_IN_ANIMATIONS_TIMING, false, true, 1).getTrigger();
}

export class FadeAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public trigger: string = 'fade',
    public fadeValue: number = 0,
    public duration: number = 100,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false,
    public voidFadeValue: number = 1
  ) {
    super(trigger, [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.stateList = [
      new State('void', new Style({ opacity: this.voidFadeValue })),
      new State('inactive', new Style()),
      new State('active', new Style({ opacity: this.fadeValue }))
    ];

    this.transitionList = [
      new Transition('inactive => active', new Animation(this.duration, 'ease-in')),
      new Transition('active => inactive', new Animation(this.duration, 'ease-out'))
    ];
  }
}
