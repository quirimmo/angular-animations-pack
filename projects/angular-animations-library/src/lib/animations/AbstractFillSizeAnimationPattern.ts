import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';

export interface FillSizeAnimationParams {
  size?: string;
  duration?: number;
}

export abstract class FillSizeAnimationPattern extends AnimationPattern {
  constructor(public triggerName: string, public size: string = '100%', public duration: number = 100, public isHeight: boolean = false) {
    super(
      triggerName,
      [new State('inactive', new Style()), new State('active', new Style(FillSizeAnimationPattern.getSize(size, isHeight)))],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      false
    );
  }

  public static getSize(size: string, isHeight: boolean): {} {
    return isHeight ? { height: size } : { width: size };
  }
}
