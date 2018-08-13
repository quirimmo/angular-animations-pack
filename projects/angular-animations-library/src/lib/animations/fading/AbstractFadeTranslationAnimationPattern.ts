import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { IAnimationPatternActions } from '../../entities/QAnimationPatternActions';
import { FadeAnimationParams } from './FadeAnimationPattern';

export interface FadeTranslationAnimationParams extends FadeAnimationParams {
  translationValue?: string;
  voidTranslationValue?: string;
}

export abstract class FadeTranslationAnimationPattern extends AnimationPattern implements IAnimationPatternActions {
  constructor(
    public trigger: string = 'fade',
    public isHorizontalTranslation: boolean = true,
    public fadeValue: number = 0,
    public translationValue: string = '0%',
    public duration: number = 300,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false,
    public voidFadeValue: number = 1,
    public voidTranslationValue: string = '100%'
  ) {
    super(trigger, [], [], includeEnterTransition, includeLeaveTransition);

    this.defineAnimationPatternProperties();
  }

  defineAnimationPatternProperties(): void {
    this.stateList = [
      new State(
        'void',
        new Style({
          opacity: this.voidFadeValue,
          transform: `${this.getTranslation()}(${this.voidTranslationValue})`
        })
      ),
      new State('inactive', new Style()),
      new State(
        'active',
        new Style({
          opacity: this.fadeValue,
          transform: `${this.getTranslation()}(${this.translationValue})`
        })
      )
    ];

    this.transitionList = [
      new Transition('inactive => active', new Animation(this.duration, 'ease-in')),
      new Transition('active => inactive', new Animation(this.duration, 'ease-out'))
    ];
  }

  getTranslation(): string {
    return this.isHorizontalTranslation ? 'translateX' : 'translateY';
  }
}
