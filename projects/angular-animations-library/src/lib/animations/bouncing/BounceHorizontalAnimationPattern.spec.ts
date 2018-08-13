import {
  BounceHorizontalAnimationPattern,
  bounceHorizontalAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation
} from './BounceHorizontalAnimationPattern';
import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';

const instance: BounceHorizontalAnimationPattern = new BounceHorizontalAnimationPattern('trigger');
instance.initBounceAnimationPattern();

describe('BounceHorizontalAnimationPattern', () => {
  it('should be a class', () => {
    expect(BounceHorizontalAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof BounceHorizontalAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractBounceAnimationPattern', () => {
    expect(instance instanceof AbstractBounceAnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('inactive', new Style({ transform: `translateX(0)` })));
  });

  it('should define no transitions by default', () => {
    expect(instance.transitionList.length).toEqual(0);
  });
});

describe('bounceHorizontalAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceHorizontalAnimation()).toEqual(
      new BounceHorizontalAnimationPattern('bounceHorizontal', 300, false, false, []).getTrigger()
    );
  });
});

describe('bounceInLeftAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceInLeftAnimation()).toEqual(
      new BounceHorizontalAnimationPattern('bounceInLeft', 300, true, false, [
        { opacity: 0, translation: '-100%', offset: 0 },
        { opacity: 0.5, translation: '20%', offset: 0.7 },
        { opacity: 1, translation: '0', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceInRightAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceInRightAnimation()).toEqual(
      new BounceHorizontalAnimationPattern('bounceInRight', 300, true, false, [
        { opacity: 0, translation: '100%', offset: 0 },
        { opacity: 0.5, translation: '-20%', offset: 0.7 },
        { opacity: 1, translation: '0', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceOutLeftAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceOutLeftAnimation()).toEqual(
      new BounceHorizontalAnimationPattern('bounceOutLeft', 300, false, true, [
        { opacity: 0, translation: '0%', offset: 0 },
        { opacity: 0.5, translation: '20%', offset: 0.7 },
        { opacity: 1, translation: '-100%', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceOutRightAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceOutRightAnimation()).toEqual(
      new BounceHorizontalAnimationPattern('bounceOutRight', 300, false, true, [
        { opacity: 0, translation: '0%', offset: 0 },
        { opacity: 0.5, translation: '-20%', offset: 0.7 },
        { opacity: 1, translation: '100%', offset: 1.0 }
      ]).getTrigger()
    );
  });
});
