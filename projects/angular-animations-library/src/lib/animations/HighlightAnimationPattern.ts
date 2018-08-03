import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { AnimationTriggerMetadata } from '@angular/animations';

export interface HighlightAnimationParams {
  highlightColor?: string;
  duration?: number;
  includeVoidTransitions?: boolean;
  highlightVoidColor?: string;
}

export function highlightAnimation(params: HighlightAnimationParams = {}): AnimationTriggerMetadata {
  return new HighlightAnimationPattern(
    params.highlightColor,
    params.duration,
    params.includeVoidTransitions,
    params.highlightVoidColor
  ).getTrigger();
}
export class HighlightAnimationPattern extends AnimationPattern {
  constructor(
    public highlightColor: string = 'yellow',
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public highlightVoidColor: string = highlightColor
  ) {
    super(
      'highlight',
      [
        new State('void', new Style({ backgroundColor: highlightVoidColor })),
        new State('inactive', new Style()),
        new State('active', new Style({ backgroundColor: highlightColor }))
      ],
      [
        new Transition('inactive => active', new Animation(duration, 'ease-in')),
        new Transition('active => inactive', new Animation(duration, 'ease-out'))
      ],
      includeVoidTransitions
    );
  }
}
