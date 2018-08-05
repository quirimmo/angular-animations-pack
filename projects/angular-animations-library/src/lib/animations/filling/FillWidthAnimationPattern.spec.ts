import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';
import { FillWidthAnimationPattern, fillWidthAnimation } from './FillWidthAnimationPattern';

const instance: FillWidthAnimationPattern = new FillWidthAnimationPattern();

describe('FillWidthAnimationPattern', () => {
  it('should be a class', () => {
    expect(FillWidthAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FillWidthAnimationPattern).toBeTruthy();
  });

  it('should inherit from FillSizeAnimationPattern', () => {
    expect(instance instanceof FillSizeAnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('inactive', new Style()), new State('active', new Style({ width: '100%'})));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('fillWidthAnimation', () => {
  it('should return the trigger', () => {
    expect(fillWidthAnimation()).toEqual(new FillWidthAnimationPattern().getTrigger());
  });
});
