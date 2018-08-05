import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeOutDownAnimationPattern, fadeOutDownAnimation } from './FadeOutDownAnimationPattern';

const instance: FadeOutDownAnimationPattern = new FadeOutDownAnimationPattern();

describe('FadeOutDownAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeOutDownAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeOutDownAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0, transform: 'translateY(100%)' })));
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1, transform: 'translateX(0)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':leave', new Animation(300, 'ease-out')));
  });
});

describe('fadeOutDownAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutDownAnimation()).toEqual(new FadeOutDownAnimationPattern().getTrigger());
  });
});
