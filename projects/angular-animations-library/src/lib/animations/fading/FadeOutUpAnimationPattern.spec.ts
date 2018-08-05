import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeOutUpAnimationPattern, fadeOutUpAnimation } from './FadeOutUpAnimationPattern';

const instance: FadeOutUpAnimationPattern = new FadeOutUpAnimationPattern();

describe('FadeOutUpAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeOutUpAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeOutUpAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0, transform: 'translateY(-100%)' })));
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1, transform: 'translateX(0)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':leave', new Animation(300, 'ease-out')));
  });
});

describe('fadeOutUpAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutUpAnimation()).toEqual(new FadeOutUpAnimationPattern().getTrigger());
  });
});
