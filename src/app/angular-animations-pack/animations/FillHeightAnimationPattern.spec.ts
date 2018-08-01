import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { FillHeightAnimationPattern, fillHeightAnimation } from './FillHeightAnimationPattern';
import { FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';

const instance: FillHeightAnimationPattern = new FillHeightAnimationPattern();

describe('FillHeightAnimationPattern', () => {
  it('should be a class', () => {
    expect(FillHeightAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FillHeightAnimationPattern).toBeTruthy();
  });

  it('should inherit from FillSizeAnimationPattern', () => {
    expect(instance instanceof FillSizeAnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('inactive', new Style()), new State('active', new Style({ height: '100%'})));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('fillHeightAnimation', () => {
  it('should return the trigger', () => {
    expect(fillHeightAnimation()).toEqual(new FillHeightAnimationPattern().getTrigger());
  });
});
