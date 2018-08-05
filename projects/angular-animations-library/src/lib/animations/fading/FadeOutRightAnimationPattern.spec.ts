import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeOutRightAnimationPattern, fadeOutRightAnimation } from './FadeOutRightAnimationPattern';

const instance: FadeOutRightAnimationPattern = new FadeOutRightAnimationPattern();

describe('FadeOutRightAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeOutRightAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeOutRightAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0, transform: 'translateX(100%)' })));
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1, transform: 'translateX(0)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':leave', new Animation(300, 'ease-out')));
  });
});

describe('fadeOutRightAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutRightAnimation()).toEqual(new FadeOutRightAnimationPattern().getTrigger());
  });
});
