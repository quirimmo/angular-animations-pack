import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { CommonAnimationParameters } from '../../entities/QAnimationsMetadata';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export interface FoldingInAnimationParams extends CommonAnimationParameters {
  finalHeight?: string;
  finalWidth?: string;
}

export function foldInAnimation(params: FillSizeAnimationParams = {}): AnimationTriggerMetadata {
  return new FoldInAnimationPattern(
    params.finalHeight,
    params.finalWidth,
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition
  ).getTrigger();
}

class FoldInAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public finalHeight: string = '100%',
    public finalWidth: string = '100%',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super('foldIn', [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.setupStateList([
      new State('void', new Style({ width: '0', height: '0' })),
      new State('inactive', new Style({ width: this.finalWidth, height: this.finalHeight })),
      new State('active', new Style())
    ]);

    this.setupTransitionList([new Transition(':enter', new Animation(this.duration, 'ease-in'))]);
  }
}
