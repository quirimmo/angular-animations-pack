import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { fadeInAnimation, FadeInAnimationPattern } from './FadeInAnimationPattern';

const instance: FadeInAnimationPattern = new FadeInAnimationPattern();

describe('FadeInAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeInAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeInAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('*', new Style({ opacity: 1 })));
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 0 })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition(':enter', new Animation(300, 'ease-in')));
  });
});

describe('fadeInAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInAnimation()).toEqual(new FadeInAnimationPattern().getTrigger());
  });
});
