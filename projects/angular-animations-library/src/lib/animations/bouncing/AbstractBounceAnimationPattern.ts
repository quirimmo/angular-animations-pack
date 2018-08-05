import AnimationStyleProperties from '../../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../../entities/QKeyframeAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';

export interface BounceAnimationStyleProperties {
  opacity: number;
  translation: string;
  offset: number;
}

export interface BounceAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
  animationStyleProperties?: Array<BounceAnimationStyleProperties>;
}

const defaultBounceAnimationStyleParams: Array<AnimationStyleProperties> = [
  { opacity: 0, translation: '-100%', offset: 0 },
  { opacity: 1, translation: '-15px', offset: 0.3 },
  { opacity: 1, translation: '0', offset: 1.0 }
];

abstract class AbstractBounceAnimationPattern extends KeyframeAnimationPattern {
  constructor(
    public triggerName: string,
    public isVertical: boolean = false,
    public duration: number = 100,
    public includeVoidTransitions: boolean = false,
    public animationStyleProperties: Array<AnimationStyleProperties> = defaultBounceAnimationStyleParams
  ) {
    super(
      triggerName,
      [new State('inactive', new Style({ transform: `${AbstractBounceAnimationPattern.getTranslation(isVertical)}(0)` }))],
      animationStyleProperties,
      duration,
      includeVoidTransitions
    );
  }

  static getTranslation(isVertical: boolean): string {
    return isVertical ? 'translateY' : 'translateX';
  }

  static convertStylePropertiesToBounceProperties(params: BounceAnimationParams, isVertical: boolean): Array<AnimationStyleProperties> {
    const bounceStyleProperties: Array<AnimationStyleProperties> = [];
    params.animationStyleProperties = params.animationStyleProperties || [];
    params.animationStyleProperties.forEach(el => {
      const obj = {};
      for (const k in el) {
        if (el.hasOwnProperty(k)) {
          if (k === 'translation') {
            obj['transform'] = `${AbstractBounceAnimationPattern.getTranslation(isVertical)}(${el[k]})`;
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

export default AbstractBounceAnimationPattern;
