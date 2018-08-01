import State from '../entities/QState';
import Style from '../entities/QStyle';
import AnimationPattern from '../entities/QAnimationPattern';
import Animation from '../entities/QAnimation';
import Transition from '../entities/QTransition';

export interface FlyAnimationParams {
  flyValue?: number;
  duration?: number;
  includeVoidTransitions?: boolean;
  voidFlyValue?: number;
}

abstract class AbstractFlyAnimationPattern extends AnimationPattern {
  constructor(
    public triggerName: string,
    public isVertical: boolean = false,
    public flyValue: number = 100,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public voidFlyValue: number = -100
  ) {
    super(
      triggerName,
      [
        new State('void', new Style({ transform: `${AbstractFlyAnimationPattern.getTransformValue(isVertical)}(${voidFlyValue}%)` })),
        new State('inactive', new Style()),
        new State('active', new Style({ transform: `${AbstractFlyAnimationPattern.getTransformValue(isVertical)}(${flyValue}%)` }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }

  public static getTransformValue(isVertical: boolean): string {
    return isVertical ? 'translateY' : 'translateX';
  }
}

export default AbstractFlyAnimationPattern;
