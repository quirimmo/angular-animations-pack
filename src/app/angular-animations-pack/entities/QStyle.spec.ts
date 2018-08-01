import Style from './QStyle';
import { style } from '@angular/animations';

const instance: Style = new Style();

describe('Style', () => {
  it('should be a class', () => {
    expect(Style).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof Style).toBeTruthy();
  });

  it('should define the exposed methods', () => {
    expect(instance.style).toEqual(jasmine.any(Function));
  });

  describe('style', () => {
    it('should return the AnimationStyleMetadata', () => {
      expect(instance.style()).toEqual(style({}));
    });
  });
});
