import AbstractAnimation from './QAbstractAnimation';
import Animation from './QAnimation';
import { animate } from '@angular/animations';

const instance: Animation = new Animation();

describe('QAnimation', () => {
  it('should be a class', () => {
    expect(Animation).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof Animation).toBeTruthy();
  });

  it('should inherit from AbstractAnimation', () => {
    expect(instance instanceof AbstractAnimation).toBeTruthy();
  });

  describe('properties', () => {
    it('should set the duration property', () => {
      expect(instance.duration).toBe(100);
    });

    it('should set the easing property', () => {
      expect(instance.easing).toBe('ease-in');
    });
  });

  describe('animate', () => {
    it('should return the AnimationAnimateMetadata', () => {
      expect(instance.animate()).toEqual(animate('100ms ease-in'));
    });
  });
});
