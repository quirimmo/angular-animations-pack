import AnimationPattern from './QAnimationPattern';
import AbstractAnimationPattern from './QAbstractAnimationPattern';

const instance: AnimationPattern = new AnimationPattern('trigger', [], []);

describe('QAnimationPattern', () => {
  it('should be a class', () => {
    expect(AnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractAnimation', () => {
    expect(instance instanceof AbstractAnimationPattern).toBeTruthy();
  });

  it('should set the stateList', () => {
    expect(instance.stateList.length).toBe(0);
  });

  it('should set the transitionList', () => {
    expect(instance.transitionList.length).toBe(0);
  });
});
