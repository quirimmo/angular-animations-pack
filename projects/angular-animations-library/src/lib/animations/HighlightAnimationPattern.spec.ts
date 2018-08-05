import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { FadeAnimationPattern, fadeAnimation } from './fading/FadeAnimationPattern';
import { HighlightAnimationPattern, highlightAnimation } from './HighlightAnimationPattern';

const instance: HighlightAnimationPattern = new HighlightAnimationPattern();

describe('HighlightAnimationPattern', () => {
  it('should be a class', () => {
    expect(HighlightAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof HighlightAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ backgroundColor: 'yellow' })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ backgroundColor: 'yellow' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('highlightAnimation', () => {
  it('should return the trigger', () => {
    expect(highlightAnimation()).toEqual(new HighlightAnimationPattern().getTrigger());
  });
});
