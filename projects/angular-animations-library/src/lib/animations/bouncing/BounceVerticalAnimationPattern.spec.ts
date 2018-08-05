import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import KeyframeAnimation from '../../entities/QKeyframeAnimation';
import Keyframe from '../../entities/QKeyframe';
import { BounceVerticalAnimationPattern, bounceVerticalAnimation } from './BounceVerticalAnimationPattern';

const instance: BounceVerticalAnimationPattern = new BounceVerticalAnimationPattern();

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

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive <=> active', new KeyframeAnimation(100, new Keyframe([]))));
  });
});

describe('bounceVerticalAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceVerticalAnimation()).toEqual(new BounceVerticalAnimationPattern(100, false, []).getTrigger());
  });
});
