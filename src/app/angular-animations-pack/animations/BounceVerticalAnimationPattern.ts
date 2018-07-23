import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import { AnimationTriggerMetadata } from '@angular/animations';
import AnimationStyleProperties from '../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../entities/QKeyframeAnimationPattern';

interface BounceVerticalMovements {
  opacity: number;
  translation: string;
  offset: number;
}

export interface BounceVerticalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
  animationStyleProperties?: Array<BounceVerticalMovements>;
}

export function bounceVerticalAnimation(params: BounceVerticalAnimationParams = {}): AnimationTriggerMetadata {
  const bounceStyleProperties: Array<AnimationStyleProperties> = BounceVerticalAnimationPattern.convertStylePropertiesToBounceProperties(
    params
  );
  return new BounceVerticalAnimationPattern(params.duration, params.includeVoidTransitions, bounceStyleProperties).getTrigger();
}
export class BounceVerticalAnimationPattern extends KeyframeAnimationPattern {
  public animationPattern: AnimationPattern;

  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = []
  ) {
    super(
      'bounceVertical',
      [new State('inactive', new Style({ transform: 'translateY(0)' }))],
      animationStyleProperties,
      duration,
      includeVoidTransitions
    );
  }

  static convertStylePropertiesToBounceProperties(params: BounceVerticalAnimationParams): Array<AnimationStyleProperties> {
    const bounceStyleProperties: Array<AnimationStyleProperties> = [];
    params.animationStyleProperties = params.animationStyleProperties || [];
    params.animationStyleProperties.forEach(el => {
      const obj = {};
      for (const k in el) {
        if (el.hasOwnProperty(k)) {
          if (k === 'translation') {
            obj['transform'] = `translateY(${el[k]})`;
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
