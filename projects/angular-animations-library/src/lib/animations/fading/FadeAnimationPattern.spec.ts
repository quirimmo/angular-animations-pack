import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FadeAnimationPattern, fadeAnimation, fadeInAnimation, fadeOutAnimation } from './FadeAnimationPattern';

const instance: FadeAnimationPattern = new FadeAnimationPattern('trigger');

describe('FadeAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ opacity: 1 })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ opacity: 0 })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('fadeAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeAnimation()).toEqual(new FadeAnimationPattern().getTrigger());
  });
});

describe('fadeInAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeInAnimation()).toEqual(new FadeAnimationPattern('fadeIn', 1, 300, true, false, 0).getTrigger());
  });
});

describe('fadeOutAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeOutAnimation()).toEqual(new FadeAnimationPattern('fadeOut', 0, 300, false, true, 1).getTrigger());
  });
});
