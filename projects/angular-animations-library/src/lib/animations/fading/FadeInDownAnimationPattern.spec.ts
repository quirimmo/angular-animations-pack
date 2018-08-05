import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeInDownAnimationPattern, fadeInDownAnimation } from './FadeInDownAnimationPattern';

const instance: FadeInDownAnimationPattern = new FadeInDownAnimationPattern();

describe('FadeInDownAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeInDownAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeInDownAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1, transform: 'translateY(0%)' })));
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0, transform: 'translateY(100%)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':enter', new Animation(300, 'ease-in')));
  });
});

describe('fadeInDownAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInDownAnimation()).toEqual(new FadeInDownAnimationPattern().getTrigger());
  });
});
