import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeInRightAnimationPattern, fadeInRightAnimation } from './FadeInRightAnimationPattern';

const instance: FadeInRightAnimationPattern = new FadeInRightAnimationPattern();

describe('FadeInRightAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeInRightAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeInRightAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1, transform: 'translateX(0%)' })));
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0, transform: 'translateX(100%)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':enter', new Animation(300, 'ease-in')));
  });
});

describe('fadeInRightAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInRightAnimation()).toEqual(new FadeInRightAnimationPattern().getTrigger());
  });
});