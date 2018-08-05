import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { FadeAnimationPattern, fadeAnimation } from './fading/FadeAnimationPattern';
import { HighlightAnimationPattern, highlightAnimation } from './HighlightAnimationPattern';
import { RotateAnimationPattern, rotateAnimation } from './RotateAnimationPattern';

const instance: RotateAnimationPattern = new RotateAnimationPattern();

describe('RotateAnimationPattern', () => {
  it('should be a class', () => {
    expect(RotateAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof RotateAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ transform: `rotate(-45deg)` })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ transform: `rotate(45deg)` })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('rotateAnimation', () => {
  it('should return the trigger', () => {
    expect(rotateAnimation()).toEqual(new RotateAnimationPattern().getTrigger());
  });
});
