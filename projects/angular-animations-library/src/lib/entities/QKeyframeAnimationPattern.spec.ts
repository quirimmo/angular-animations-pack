import KeyframeAnimationPattern from './QKeyframeAnimationPattern';
import AbstractAnimationPattern from './QAbstractAnimationPattern';
import Keyframe from './QKeyframe';
import Transition from './QTransition';
import KeyframeAnimation from './QKeyframeAnimation';

const instance: KeyframeAnimationPattern = new KeyframeAnimationPattern('trigger', [], [], 100);
instance.initKeyframeAnimationPattern();

describe('KeyframeAnimation', () => {
  it('should be a class', () => {
    expect(KeyframeAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof KeyframeAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractAnimationPattern', () => {
    expect(instance instanceof AbstractAnimationPattern).toBeTruthy();
  });

  it('should expose the methods', () => {
    expect(instance.initKeyframeAnimationPattern).toEqual(jasmine.any(Function));
    expect(instance.getTrigger).toEqual(jasmine.any(Function));
  });

  it('should inherit from AbstractAnimationPattern', () => {
    expect(instance instanceof AbstractAnimationPattern).toBeTruthy();
  });

  it('should init the state list and the transition list', () => {
    expect(instance.stateList).toEqual([]);
    expect(instance.transitionList).toEqual([new Transition('inactive <=> active', new KeyframeAnimation(100, new Keyframe([])))]);
  });
});
