import { BounceHorizontalAnimationPattern, bounceHorizontalAnimation } from './BounceHorizontalAnimationPattern';
import AbstractBounceAnimationPattern from './AbstractBounceAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import KeyframeAnimation from '../../entities/QKeyframeAnimation';
import Keyframe from '../../entities/QKeyframe';

const instance: BounceHorizontalAnimationPattern = new BounceHorizontalAnimationPattern();

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

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive <=> active', new KeyframeAnimation(100, new Keyframe([]))));
  });
});

describe('bounceHorizontalAnimation', () => {
  it('should return the trigger', () => {
    expect(bounceHorizontalAnimation()).toEqual(new BounceHorizontalAnimationPattern(100, false, []).getTrigger());
  });
});
