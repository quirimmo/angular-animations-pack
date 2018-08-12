import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { CommonAnimationParameters } from '../../entities/QAnimationsMetadata';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';
import { AnimationTriggerMetadata } from '@angular/animations';

export function foldInAnimation(params: CommonAnimationParameters = {}): AnimationTriggerMetadata {
  return new FoldAnimationPattern('foldIn', params.duration, true, false).getTrigger();
}

export function foldOutAnimation(params: CommonAnimationParameters = {}): AnimationTriggerMetadata {
  return new FoldAnimationPattern('foldOut', params.duration, false, true).getTrigger();
}

class FoldAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public trigger: string = 'fold',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super(trigger, [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.setupStateList([
      new State('void', new Style({ width: '0', height: '0', overflow: 'hidden' })),
      new State('inactive', new Style({ overflow: 'hidden' })),
      new State('active', new Style())
    ]);

    const trasition =
      this.trigger === 'foldIn'
        ? new Transition(':enter', new Animation(this.duration, 'ease-in'))
        : new Transition(':leave', new Animation(this.duration, 'ease-out'));
    this.setupTransitionList([trasition]);
  }
}
