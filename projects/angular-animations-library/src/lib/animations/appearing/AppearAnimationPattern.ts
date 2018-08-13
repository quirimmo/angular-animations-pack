import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';
import { CommonAnimationParameters, BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';

export interface AppearAnimationParams extends CommonAnimationParameters {
  voidScale?: number;
  activeScale?: number;
}

export function appearAnimation(params: AppearAnimationParams = {}): AnimationTriggerMetadata {
  return new AppearAnimationPattern(
    params.duration,
    params.voidScale,
    params.activeScale,
    params.includeEnterTransition,
    params.includeLeaveTransition
  ).getTrigger();
}

export class AppearAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public voidScale: number = 0,
    public activeScale: number = 1,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super('appear', [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.setupStateList([
      new State('void', new Style({ transform: `scale(${this.voidScale})`, opacity: 0 })),
      new State('inactive', new Style()),
      new State('active', new Style({ transform: `scale(${this.activeScale})`, opacity: 1 }))
    ]);

    this.setupTransitionList([
      new Transition('inactive => active', new Animation(this.duration, 'ease-in')),
      new Transition('active => inactive', new Animation(this.duration, 'ease-out'))
    ]);
  }
}
