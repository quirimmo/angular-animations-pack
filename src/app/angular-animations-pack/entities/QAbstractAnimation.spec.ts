import AbstractAnimation from './QAbstractAnimation';
import { AnimationAnimateMetadata } from '@angular/animations';

class AbstractMocked extends AbstractAnimation {
  animate(): AnimationAnimateMetadata {
    return null;
  }
}

const instance: AbstractMocked = new AbstractMocked();

describe('QAbstractAnimation', () => {
  it('should be a class', () => {
    expect(AbstractAnimation).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof AbstractAnimation).toBeTruthy();
  });

  it('should set the duration property', () => {
    expect(instance.duration).toBe(100);
  });
});
