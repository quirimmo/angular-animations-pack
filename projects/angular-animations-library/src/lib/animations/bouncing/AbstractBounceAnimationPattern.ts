import AnimationStyleProperties from '../../entities/QAnimationStyleProperties';
import KeyframeAnimationPattern from '../../entities/QKeyframeAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import { CommonAnimationParameters } from '../../entities/QAnimationsMetadata';
import { AnimationTriggerMetadata } from '../../../../../../node_modules/@angular/animations';

export interface BounceAnimationStyleProperties {
  opacity: number;
  translation: string;
  offset: number;
}

export interface BounceAnimationParams extends CommonAnimationParameters {
  animationStyleProperties?: Array<BounceAnimationStyleProperties>;
}

abstract class AbstractBounceAnimationPattern extends KeyframeAnimationPattern {
  constructor(
    public triggerName: string,
    public isVertical: boolean = false,
    public duration: number = 100,
    public includeEnterTransition: boolean = false,
    public includeLeaveTransition: boolean = false,
    public bounceAnimationParams: Array<BounceAnimationStyleProperties> = []
  ) {
    super(triggerName, [], [], duration, includeEnterTransition, includeLeaveTransition);
  }

  getTrigger(): AnimationTriggerMetadata {
    this.animationStyleProperties = this.convertStylePropertiesToBounceProperties(this.bounceAnimationParams);
    this.initBounceAnimationPattern();
    return super.getTrigger();
  }

  initBounceAnimationPattern(): void {
    this.setupStateList([new State('inactive', new Style({ transform: `${this.getTranslation()}(0)` }))]);
  }

  getTranslation(): string {
    return this.isVertical ? 'translateY' : 'translateX';
  }

  convertStylePropertiesToBounceProperties(styleProperties: Array<BounceAnimationStyleProperties> = []): Array<AnimationStyleProperties> {
    const bounceStyleProperties: Array<AnimationStyleProperties> = [];
    styleProperties.forEach(onEachStyleProperties.bind(this));
    return bounceStyleProperties;

    function onEachStyleProperties(el: BounceAnimationStyleProperties): void {
      const obj = {};
      for (const k in el) {
        if (el.hasOwnProperty(k)) {
          if (k === 'translation') {
            obj['transform'] = `${this.getTranslation()}(${el[k]})`;
          } else {
            obj[k] = el[k];
          }
        }
      }
      bounceStyleProperties.push(obj);
    }
  }
}

export default AbstractBounceAnimationPattern;
