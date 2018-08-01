import KeyframeAnimation from './QKeyframeAnimation';
import AbstractAnimation from './QAbstractAnimation';
import { animate } from '@angular/animations';
import Keyframe from './QKeyframe';

const instance: KeyframeAnimation = new KeyframeAnimation();

describe('QKeyframeAnimation', () => {
  it('should be a class', () => {
    expect(KeyframeAnimation).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof KeyframeAnimation).toBeTruthy();
  });

  it('should inherit from AbstractAnimation', () => {
    expect(instance instanceof AbstractAnimation).toBeTruthy();
  });

  it('should define the public methods', () => {
    expect(instance.animate).toEqual(jasmine.any(Function));
  });

  describe('animate', () => {
    it('should return the AnimationAnimateMetadata', () => {
      expect(instance.animate()).toEqual(animate(100, new Keyframe().keyframe()));
    });
  });
});
