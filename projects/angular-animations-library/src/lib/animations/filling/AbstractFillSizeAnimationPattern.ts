import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { CommonAnimationParameters } from '../../entities/QAnimationsMetadata';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';

export interface FillSizeAnimationParams extends CommonAnimationParameters {
  size?: string;
}

export abstract class FillSizeAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public triggerName: string = 'fillSize',
    public size: string = '100%',
    public duration: number = 100,
    public isHeight: boolean = false,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false
  ) {
    super(triggerName, [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.setupStateList([new State('inactive', new Style()), new State('active', new Style(this.getSize()))]);

    this.setupTransitionList([
      new Transition('inactive => active', new Animation(this.duration, 'ease-in')),
      new Transition('active => inactive', new Animation(this.duration, 'ease-out'))
    ]);
  }

  public getSize(): {} {
    return this.isHeight ? { height: this.size } : { width: this.size };
  }
}
