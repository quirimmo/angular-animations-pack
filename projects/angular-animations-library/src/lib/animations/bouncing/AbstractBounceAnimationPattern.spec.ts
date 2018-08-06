import AbstractBounceAnimationPattern, { BounceAnimationParams, BounceAnimationStyleProperties } from './AbstractBounceAnimationPattern';
import KeyframeAnimationPattern from '../../entities/QKeyframeAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Trigger from '../../entities/QTrigger';
import Transition from '../../entities/QTransition';
import KeyframeAnimation from '../../entities/QKeyframeAnimation';
import Keyframe from '../../entities/QKeyframe';

class AbstractBounceAnimationPatternMock extends AbstractBounceAnimationPattern {}
const instance: AbstractBounceAnimationPatternMock = new AbstractBounceAnimationPatternMock('trigger');

describe('AbstractBounceAnimationPattern', () => {
  it('should be a class', () => {
    expect(AbstractBounceAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(instance.getTranslation).toEqual(jasmine.any(Function));
    expect(instance.convertStylePropertiesToBounceProperties).toEqual(jasmine.any(Function));
    expect(instance.getTrigger).toEqual(jasmine.any(Function));
    expect(instance.initBounceAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should inherit from KeyframeAnimationPattern', () => {
    expect(instance instanceof KeyframeAnimationPattern).toBeTruthy();
  });

  describe('getTranslation', () => {
    it('should return translateY', () => {
      instance.isVertical = true;
      expect(instance.getTranslation()).toEqual('translateY');
    });

    it('should return translateX', () => {
      instance.isVertical = false;
      expect(instance.getTranslation()).toEqual('translateX');
    });
  });

  describe('convertStylePropertiesToBounceProperties', () => {
    const params: Array<BounceAnimationStyleProperties> = [
      {
        opacity: 0.5,
        translation: '50px',
        offset: 0.1
      },
      {
        opacity: 1,
        translation: '250px',
        offset: 0.8
      }
    ];

    it('should convert the params for vertical bounce', () => {
      instance.isVertical = true;
      expect(instance.convertStylePropertiesToBounceProperties(params)).toEqual([
        { opacity: 0.5, transform: 'translateY(50px)', offset: 0.1 },
        { opacity: 1, transform: 'translateY(250px)', offset: 0.8 }
      ]);
    });

    it('should convert the params for horizontal bounce', () => {
      instance.isVertical = false;
      expect(instance.convertStylePropertiesToBounceProperties(params)).toEqual([
        { opacity: 0.5, transform: 'translateX(50px)', offset: 0.1 },
        { opacity: 1, transform: 'translateX(250px)', offset: 0.8 }
      ]);
    });
  });

  describe('initBounceAnimationPattern', () => {
    it('should add the vertical inactive state', () => {
      instance.isVertical = true;
      instance.initBounceAnimationPattern();
      expect(instance.stateList.length).toBe(1);
      expect(instance.stateList[0]).toEqual(new State('inactive', new Style({ transform: `translateY(0)` })));
    });

    it('should add the horizontal inactive state', () => {
      instance.isVertical = false;
      instance.initBounceAnimationPattern();
      expect(instance.stateList.length).toBe(1);
      expect(instance.stateList[0]).toEqual(new State('inactive', new Style({ transform: `translateX(0)` })));
    });
  });

  describe('getTrigger', () => {
    it('should return the trigger', () => {
      expect(instance.getTrigger()).toEqual(
        new Trigger(
          'trigger',
          [new State('inactive', new Style({ transform: `translateX(0)` }))],
          [new Transition('inactive <=> active', new KeyframeAnimation(100, new Keyframe()))]
        ).trigger()
      );
    });
  });
});
