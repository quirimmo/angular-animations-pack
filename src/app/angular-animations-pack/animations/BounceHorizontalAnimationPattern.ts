import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationStyleProperties from '../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../entities/QKeyframeAnimationPattern';

interface BounceHorizontalMovements {
  opacity: number;
  translation: string;
  offset: number;
}

export interface BounceHorizontalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
  animationStyleProperties?: Array<BounceHorizontalMovements>;
}

export function bounceHorizontalAnimation(params: BounceHorizontalAnimationParams = {}): AnimationTriggerMetadata {
  const bounceStyleProperties: Array<AnimationStyleProperties> = BounceHorizontalAnimationPattern.convertStylePropertiesToBounceProperties(
    params
  );
  return new BounceHorizontalAnimationPattern(params.duration, params.includeVoidTransitions, bounceStyleProperties).getTrigger();
}

export class BounceHorizontalAnimationPattern extends KeyframeAnimationPattern {
  public animationPattern: AnimationPattern;

  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = []
  ) {
    super(
      'bounceHorizontal',
      [new State('inactive', new Style({ transform: 'translateX(0)' }))],
      animationStyleProperties,
      duration,
      includeVoidTransitions
    );
  }

  static convertStylePropertiesToBounceProperties(params: BounceHorizontalAnimationParams): Array<AnimationStyleProperties> {
    const bounceStyleProperties: Array<AnimationStyleProperties> = [];
    params.animationStyleProperties = params.animationStyleProperties || [];
    params.animationStyleProperties.forEach(el => {
      const obj = {};
      for (const k in el) {
        if (el.hasOwnProperty(k)) {
          if (k === 'translation') {
            obj['transform'] = `translateX(${el[k]})`;
          } else {
            obj[k] = el[k];
          }
        }
      }
      bounceStyleProperties.push(obj);
    });
    return bounceStyleProperties;
  }
}
