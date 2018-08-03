import Transition from './QTransition';
import { transition } from '@angular/animations';
import Animation from './QAnimation';

const instance: Transition = new Transition();

describe('Transition', () => {
  it('should be a class', () => {
    expect(Transition).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof Transition).toBeTruthy();
  });

  it('should define the exposed methods', () => {
    expect(instance.transition).toEqual(jasmine.any(Function));
  });

  describe('transition', () => {
    it('should return the AnimationTransitionMetadata', () => {
      expect(instance.transition()).toEqual(transition('inactive => active', new Animation().animate()));
    });
  });
});
