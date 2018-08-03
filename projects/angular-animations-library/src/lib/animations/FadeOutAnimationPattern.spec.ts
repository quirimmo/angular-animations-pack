import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { FadeOutAnimationPattern, fadeOutAnimation } from './FadeOutAnimationPattern';

const instance: FadeOutAnimationPattern = new FadeOutAnimationPattern();

describe('FadeOutAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeOutAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeOutAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0 })));
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1 })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':leave', new Animation(300, 'ease-out')));
  });
});

describe('fadeOutAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutAnimation()).toEqual(new FadeOutAnimationPattern().getTrigger());
  });
});
