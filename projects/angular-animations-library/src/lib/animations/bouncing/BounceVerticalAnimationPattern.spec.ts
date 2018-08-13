import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import {
  BounceVerticalAnimationPattern,
  bounceVerticalAnimation,
  bounceInUpAnimation,
  bounceInDownAnimation,
  bounceOutUpAnimation,
  bounceOutDownAnimation
} from './BounceVerticalAnimationPattern';

const instance: BounceVerticalAnimationPattern = new BounceVerticalAnimationPattern('trigger');
instance.initBounceAnimationPattern();

describe('BounceVerticalAnimationPattern', () => {
  it('should be a class', () => {
    expect(BounceVerticalAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof BounceVerticalAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractBounceAnimationPattern', () => {
    expect(instance instanceof AbstractBounceAnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('inactive', new Style({ transform: `translateY(0)` })));
  });

  it('should define no transitions by default', () => {
    expect(instance.transitionList.length).toEqual(0);
  });
});

describe('bounceVerticalAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceVerticalAnimation()).toEqual(new BounceVerticalAnimationPattern('bounceVertical', 300, false, false, []).getTrigger());
  });
});

describe('bounceInUpAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceInUpAnimation()).toEqual(
      new BounceVerticalAnimationPattern('bounceInUp', 300, true, false, [
        { opacity: 0, translation: '-100%', offset: 0 },
        { opacity: 0.5, translation: '20%', offset: 0.7 },
        { opacity: 1, translation: '0', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceInDownAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceInDownAnimation()).toEqual(
      new BounceVerticalAnimationPattern('bounceInDown', 300, true, false, [
        { opacity: 0, translation: '100%', offset: 0 },
        { opacity: 0.5, translation: '-20%', offset: 0.7 },
        { opacity: 1, translation: '0', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceOutUpAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceOutUpAnimation()).toEqual(
      new BounceVerticalAnimationPattern('bounceOutUp', 300, false, true, [
        { opacity: 0, translation: '0%', offset: 0 },
        { opacity: 0.5, translation: '20%', offset: 0.7 },
        { opacity: 1, translation: '-100%', offset: 1.0 }
      ]).getTrigger()
    );
  });
});

describe('bounceOutDownAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceOutDownAnimation()).toEqual(
      new BounceVerticalAnimationPattern('bounceOutDown', 300, false, true, [
        { opacity: 0, translation: '0%', offset: 0 },
        { opacity: 0.5, translation: '-20%', offset: 0.7 },
        { opacity: 1, translation: '100%', offset: 1.0 }
      ]).getTrigger()
    );
  });
});
